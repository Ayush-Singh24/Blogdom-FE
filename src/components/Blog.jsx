import Link from "next/link";
import BackButton from "./BackButton";

export default function Blog({ back, title, authorName, blogContent }) {
  return (
    <div className="max-w-[1520px] mx-auto">
      <section className="m-5 bg-color-card-container rounded-3xl">
        <div className="p-5 bg">
          <BackButton route={back} />
        </div>
        <div className="flex flex-col gap-10 mb-4 p-5 bg-slate-300 shadow-black shadow-md rounded-t-3xl rounded-b-3xl transition-all hover:bg-color-primary hover:text-white">
          <h1 className="text-5xl">{title}</h1>
          <span className="self-end text-2xl">{authorName}</span>
        </div>
        <p className="p-5 text-3xl whitespace-pre-wrap">{blogContent}</p>
      </section>
      <div className="flex justify-center ">
        <Link href={back} className="hover:scale-105">
          <span className="text-white py-4 text-4xl underline underline-offset-4 cursor-pointer  transition-all">
            Go back
          </span>
        </Link>
      </div>
    </div>
  );
}
