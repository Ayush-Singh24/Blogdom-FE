import Blog from "@/components/Blog";
import Loader from "@/components/Loader";
import { useAuth } from "@/hooks/useAuth";
import { openAlert } from "@/redux/reducers/alert";
import { Service } from "@/service/service";
import { AlertStatus, ResponseStatus } from "@/utils/constants";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function myBlogPage() {
  const router = useRouter();
  const id = router.query.id;
  const dispatch = useDispatch();
  const [blogData, setBlogData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const isAuth = useAuth();

  useEffect(() => {
    Service.getBlog(`/${id}`).then((response) => {
      if (response.status === ResponseStatus.Ok) {
        setBlogData(response);
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
    <Blog
      back="/myblogs"
      title={blogData.title}
      authorName={blogData.authorName}
      blogContent={blogData.blogContent}
    />
  );
}
