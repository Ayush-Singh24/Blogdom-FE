import Card from "@/components/Card";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
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
      <SearchBox />
      <div className="m-5 p-5 h-screen bg-color-card-container rounded-2xl flex flex-col gap-10 overflow-y-scroll scroll-style">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Navbar />
    </>
  );
}
