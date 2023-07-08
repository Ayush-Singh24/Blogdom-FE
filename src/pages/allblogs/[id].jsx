import { openAlert } from "@/redux/reducers/alert";
import { Service } from "@/service/service";
import { AlertStatus, ResponseStatus } from "@/utils/constants";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Details() {
  const router = useRouter();
  const id = router.query.id;
  const dispatch = useDispatch();
  const [blogData, setBlogData] = useState({});

  useEffect(() => {
    console.log(id);
    Service.getBlog(`/${id}`).then((response) => {
      if (response.status === ResponseStatus.Ok) {
        setBlogData(response);
      } else {
        dispatch(
          openAlert({ status: AlertStatus.Error, message: response.message })
        );
      }
    });
  }, []);

  return (
    <section className="m-5 bg-color-card-container rounded-3xl">
      <div className="flex flex-col mb-4 p-5 shadow-black shadow-md rounded-t-3xl rounded-b-3xl">
        <h1 className="text-5xl">{blogData.title}</h1>
        <span className="self-end text-2xl">{blogData.authorName}</span>
      </div>
      <p className="p-5 text-3xl">{blogData.blogContent}</p>
    </section>
  );
}
