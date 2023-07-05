import Button from "@/components/Button";
import LoginForm from "@/components/LoginForm";
import Link from "next/link";

export default function Login() {
  return (
    <main className="flex flex-col gap-10 justify-center items-center h-screen text-4xl">
      <div className="flex flex-col gap-16 bg-white rounded-3xl p-10 shadow-black shadow-lg opacity-0 animate-fade-quick fill-mode-forwards md:w-3/4">
        <h3 className="self-center text-6xl">Login</h3>
        <LoginForm type={"username"} />
        <LoginForm type={"password"} />
        <div className="self-center">
          <Button text="Login" route="/" />
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
