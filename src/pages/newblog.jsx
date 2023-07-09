import BackButton from "@/components/BackButton";
import Loader from "@/components/Loader";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";

export default function NewBlog() {
  const isAuth = useAuth();
  const router = useRouter();

  if (isAuth === null) {
    return <Loader />;
  }

  if (!isAuth) {
    router.push("/login");
    return <Loader />;
  }

  return (
    <form className="m-5 p-5 bg-color-card-container rounded-3xl">
      <BackButton />
      <div className="p-5 flex flex-col gap-5">
        <label className="text-3xl">Enter Blog Title:</label>
        <input
          type="text"
          placeholder="Title"
          required
          className="text-3xl rounded-3xl p-3 border-2 border-color-primary focus:outline-none"
        />
      </div>
      <div className="p-5 flex flex-col gap-5 h-full">
        <label className="text-3xl">Enter Blog Body:</label>
        <textarea
          placeholder="Body"
          required
          className="bg-white focus:outline-none border-2 border-color-primary rounded-3xl text-3xl p-3"
        ></textarea>
      </div>
    </form>
  );
}
