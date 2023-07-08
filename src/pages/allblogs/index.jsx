import Card from "@/components/Card";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
import { useAuth } from "@/hooks/useAuth";
import { openAlert } from "@/redux/reducers/alert";
import { Service } from "@/service/service";
import { AlertStatus, ResponseStatus } from "@/utils/constants";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function AllBlogs() {
  const router = useRouter();
  const isAuth = useAuth();
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    Service.allBlogs().then((response) => {
      if (response.status === ResponseStatus.Ok) {
        setBlogs(response.allBlogs);
      } else {
        dispatch(
          openAlert({ status: AlertStatus.Error, message: response.message })
        );
      }
    });
  }, []);

  if (isAuth === null) {
    return <Loader />;
  }

  if (!isAuth) {
    router.push("/login");
    return <Loader />;
  }
  return (
    <div className="relative overflow-y-hidden">
      <SearchBox />
      <div className="m-5 p-5 h-screen bg-color-card-container rounded-2xl flex flex-col gap-10 overflow-y-scroll scroll-style">
        {blogs &&
          blogs.map((blog) => {
            return (
              <Card
                key={blog.fileId}
                title={blog.title}
                author={blog.authorName}
              />
            );
          })}
      </div>
      <Navbar />
    </div>
  );
}
