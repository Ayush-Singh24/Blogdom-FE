import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";

export default function AllBlogs() {
  const router = useRouter();
  const isAuth = useAuth();

  if (isAuth === null) {
    return <Loader />;
  }

  if (!isAuth) {
    router.push("/login");
    return <Loader />;
  }
  return (
    <>
      <div className="m-8 bg-white opacity-60 rounded-2xl">hellow</div>
      <Navbar />
    </>
  );
}
