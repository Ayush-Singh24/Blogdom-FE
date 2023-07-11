import Card from "@/components/Card";
import GoToTop from "@/components/GoToTop";
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
  const [isLoading, setIsLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    Service.allBlogs().then((response) => {
      if (response.status === ResponseStatus.Ok) {
        setBlogs(response.allBlogs);
      } else {
        dispatch(
          openAlert({ status: AlertStatus.Error, message: response.message })
        );
      }
      setIsLoading(false);
    });
  }, []);

  if (isAuth === null || isLoading) {
    return <Loader />;
  }

  if (!isAuth) {
    router.push("/login");
    return <Loader />;
  }
  return (
    <div className="relative flex flex-col overflow-y-hidden">
      <SearchBox searchInput={searchInput} setSearchInput={setSearchInput} />
      <div className="m-5 p-5 mb-36 bg-color-card-container rounded-2xl flex flex-col gap-10">
        {blogs &&
          blogs.map((blog) => {
            const regexp = searchInput.toLowerCase();
            const match = blog.title.toLowerCase().search(regexp);
            return !searchInput || match !== -1 ? (
              <Card
                key={blog.fileId}
                id={blog.fileId}
                title={blog.title}
                author={blog.authorName}
                back={"allblogs"}
              />
            ) : (
              <></>
            );
          })}
      </div>
      <GoToTop />
      <Navbar />
    </div>
  );
}
