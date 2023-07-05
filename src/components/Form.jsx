import InputBox from "./InputBox";
import Button from "./Button";
import Link from "next/link";

export default function Form({ page }) {
  return (
    <main className="flex flex-col gap-10 justify-center items-center h-screen  text-4xl short:text-2xl short:gap-7">
      <div className="flex flex-col gap-16 bg-white rounded-3xl p-10 shadow-black shadow-lg opacity-0 animate-fade-quick fill-mode-forwards md:w-3/4 short:gap-10">
        <h3 className="self-center text-6xl short:text-3xl">{page}</h3>
        {page === "Login" ? (
          <>
            <InputBox credential={"Username"} type={"text"} />
            <InputBox credential={"Password"} type={"password"} />
          </>
        ) : (
          <>
            <InputBox credential={"Email Id"} type={"email"} />
            <InputBox credential={"Username"} type={"text"} />
            <InputBox credential={"Password"} type={"password"} />
            <InputBox credential={"Confirm password"} type={"password"} />
          </>
        )}
        <div className="self-center">
          <Button text={page} route="/" />
        </div>
      </div>
      <Link href="/">
        <h5 className="text-white underline underline-offset-4 cursor-pointer  transition-all hover:scale-105">
          Go back to homepage.
        </h5>
      </Link>
    </main>
  );
}
