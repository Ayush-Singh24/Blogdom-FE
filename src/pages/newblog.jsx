import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import Loader from "@/components/Loader";
import { useAuth } from "@/hooks/useAuth";
import { openAlert } from "@/redux/reducers/alert";
import { Service } from "@/service/service";
import { AlertStatus, ResponseStatus } from "@/utils/constants";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function NewBlog() {
  const isAuth = useAuth();
  const router = useRouter();
  const dispatch = useDispatch();
  const [blogTitle, setBlogTitle] = useState("");
  const [blogBody, setBlogBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { title: blogTitle, blogContent: blogBody };
    setIsLoading(true);
    const response = await Service.postBlog(data);
    console.log(response);
    if (response.status === ResponseStatus.Created) {
      dispatch(
        openAlert({ status: AlertStatus.Success, message: response.message })
      );
      router.push("/allblogs");
    } else {
      setIsLoading(false);
      dispatch({ status: AlertStatus.Error, message: response.message });
    }
  };

  if (isAuth === null || isLoading) {
    return <Loader />;
  }

  if (!isAuth) {
    router.push("/login");
    return <Loader />;
  }

  return (
    <div className="flex items-center justify-stretch h-screen">
      <form
        className="m-5 p-5 gap-5 bg-color-card-container rounded-3xl w-full"
        onSubmit={handleSubmit}
      >
        <BackButton />
        <div className="p-5 flex flex-col gap-5">
          <label className="text-3xl">Enter Blog Title:</label>
          <input
            type="text"
            placeholder="Title"
            required
            value={blogTitle}
            className="text-3xl rounded-3xl p-3 border-2 border-color-primary focus:outline-none"
            onChange={(event) => setBlogTitle(event.target.value)}
          />
        </div>
        <div className="p-5 flex flex-col gap-5">
          <label className="text-3xl">Enter Blog Body:</label>
          <textarea
            placeholder="Body"
            required
            value={blogBody}
            onChange={(event) => setBlogBody(event.target.value)}
            className="bg-white focus:outline-none border-2 border-color-primary rounded-3xl text-3xl p-3 h-[30rem]"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <Button text="Post Blog" type="submit" />
        </div>
      </form>
    </div>
  );
}
