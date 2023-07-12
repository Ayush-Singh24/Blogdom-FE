import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="fixed bottom-0 w-full bg-white flex z-50 p-1 lg:hidden">
      <button
        className="w-1/3 flex justify-center"
        onClick={() => router.push("/allblogs")}
      >
        <img src="/icons/home.svg" alt="home" className="h-14" />
      </button>
      <button className="w-1/3" onClick={() => router.push("/newblog")}>
        <div className="relative w-full h-full bg-white">
          <img
            src="/icons/plus-circle.svg"
            alt="new"
            className="h-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[63%] bg-white rounded-full  hover:invert active:invert"
          />
        </div>
      </button>
      <button
        className="w-1/3 flex justify-center"
        onClick={() => router.push("/myblogs")}
      >
        <img src="/icons/profile.svg" alt="profile" className="h-14" />
      </button>
    </nav>
  );
}
