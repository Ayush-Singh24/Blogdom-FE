import Button from "@/components/Button";
import Loader from "@/components/Loader";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const isAuth = useAuth();

  if (isAuth === null) {
    return <Loader />;
  }

  if (isAuth) {
    router.push("/allblogs");
    return <Loader />;
  }

  return (
    <main className=" h-screen flex items-center justify-center xl:justify-start max-w-[1400px] mx-auto">
      <div className="flex flex-col gap-24">
        <div className="flex flex-col items-center justify-center gap-5">
          <img
            src="/images/blogdom_icon.png"
            alt="logo"
            className="opacity-0 animate-move-up fill-mode-forwards"
          />
          <h2 className="text-center text-white opacity-0 text-8xl animate-move-up fill-mode-forwards xl:text-left">
            Welcome to Blogdom!
          </h2>
          <span className="text-3xl text-center text-white opacity-0 animate-move-up fill-mode-forwards xl:text-left">
            Kingdom of Blogs
          </span>
        </div>
        <div className="flex justify-center opacity-0 gap-14 animate-move-up-later fill-mode-forwards">
          <Button text={"Login"} onClick={() => router.push("/login")} />
          <Button text={"Sign Up"} onClick={() => router.push("/signup")} />
        </div>
      </div>
      <div className="relative flex-grow hidden h-full opacity-0 xl:block animate-fade fill-mode-forwards">
        <div className="h-96 w-96 scale-100 absolute top-[55%] left-[10%] rounded-full overflow-hidden flex justify-center items-center z-10 transition-all hover:scale-125 hover:z-50 hover:outline outline-4 outline-black">
          <img
            src="/images/person1.jpg"
            alt="person"
            className="scale-125 translate-y-40"
          />
        </div>
        <div className="absolute z-40 flex items-center justify-center overflow-hidden transition-all scale-100 -translate-x-1/2 -translate-y-1/2 rounded-full h-96 w-96 top-1/2 left-1/2 hover:scale-125 hover:z-50 hover:outline outline-4 outline-black">
          <img src="/images/person2.jpg" alt="person" className="scale-150" />
        </div>
        <div className="h-96 w-96 scale-100 absolute rounded-full top-[25%] right-[10%] overflow-hidden transition-all hover:scale-125 hover:z-50 hover:outline outline-4 outline-black">
          <img src="/images/person3.jpg" alt="person" className="" />
        </div>
        <div className="h-96 w-96 scale-100 absolute rounded-full top-[25%] left-[10%] overflow-hidden flex justify-center items-center transition-all hover:scale-125 hover:z-50 hover:outline outline-4 outline-black">
          <img src="/images/person4.jpg" alt="person" className="" />
        </div>
        <div className="h-96 w-96 scale-100 absolute rounded-full top-[55%] right-[10%] overflow-hidden flex justify-center items-center transition-all hover:scale-125 hover:z-50 hover:outline outline-4 outline-black">
          <img src="/images/person5.jpg" alt="person" className="" />
        </div>
      </div>
    </main>
  );
}
