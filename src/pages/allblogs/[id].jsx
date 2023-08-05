import Blog from "@/components/Blog";
import Loader from "@/components/Loader";
import { useAuth } from "@/hooks/useAuth";
import { openAlert } from "@/redux/reducers/alert";
import { Service } from "@/service/service";
import { AlertStatus, ResponseStatus } from "@/utils/constants";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Details() {
  const router = useRouter();
  const id = router.query.id;
  const dispatch = useDispatch();
  const [blogData, setBlogData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const isAuth = useAuth();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    Service.getBlog(`/${id}`, signal)
      .then((response) => {
        if (response.status === ResponseStatus.Ok) {
          setBlogData(response);
        } else {
          dispatch(
            openAlert({ status: AlertStatus.Error, message: response.message })
          );
        }
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.message === "AbortError") {
          console.log("Request canceled");
        } else {
          openAlert({ status: AlertStatus.Error, message: err.message });
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  if (isAuth === null || isLoading) {
    return <Loader />;
  }

  if (!isAuth) {
    router.push("/login");
    return <Loader />;
  }

  return (
    <Blog
      back="/allblogs"
      title={blogData.title}
      authorName={blogData.authorName}
      blogContent={blogData.blogContent}
    />
  );
}
