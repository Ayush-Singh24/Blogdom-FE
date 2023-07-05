import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-color-secondary to-color-primary h-screen flex items-center justify-center 2xl:justify-start">
      <div className="flex flex-col gap-24 2xl:pl-40">
        <h2 className="text-8xl text-center text-white animate-move-up opacity-0 fill-mode-forwards 2xl:text-left">
          Welcome to Blogdom!
        </h2>
        <div className="flex gap-14 justify-center animate-move-up-later opacity-0 fill-mode-forwards">
          <Button text={"Login"} />
          <Button text={"Sign Up"} />
        </div>
      </div>
    </main>
  );
}
