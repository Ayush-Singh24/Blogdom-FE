import LoginForm from "@/components/LoginForm";

export default function Login() {
  return (
    <main className="flex justify-center items-center h-screen text-4xl">
      <div className="flex flex-col gap-20">
        <LoginForm type={"username"} />
        <LoginForm type={"password"} />
      </div>
    </main>
  );
}
