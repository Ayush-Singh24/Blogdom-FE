import Button from "@/components/Button";

export default function Home() {
  return (
    <main className=" h-screen flex items-center justify-center xl:justify-start max-w-[1400px] mx-auto">
      <div className="flex flex-col gap-24">
        <h2 className="text-8xl text-center text-white animate-move-up opacity-0 fill-mode-forwards xl:text-left">
          Welcome to Blogdom!
        </h2>
        <div className="flex gap-14 justify-center animate-move-up-later opacity-0 fill-mode-forwards">
          <Button text={"Login"} />
          <Button text={"Sign Up"} />
        </div>
      </div>
      <div className="hidden relative xl:block flex-grow h-full animate-fade fill-mode-forwards">
        <div className="h-96 w-96 scale-100 absolute top-[55%] left-[10%] rounded-full overflow-hidden flex justify-center items-center z-10 transition-all hover:scale-125 hover:z-50">
          <img
            src="/images/person1.jpg"
            alt="person"
            className="scale-125 translate-y-40"
          />
        </div>
        <div className="h-96 w-96 scale-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden flex justify-center items-center z-40 transition-all hover:scale-125 hover:z-50">
          <img src="/images/person2.jpg" alt="person" className="scale-150" />
        </div>
        <div className="h-96 w-96 scale-100 absolute rounded-full top-[25%] right-[10%] overflow-hidden transition-all hover:scale-125 hover:z-50">
          <img src="/images/person3.jpg" alt="person" className="" />
        </div>
        <div className="h-96 w-96 scale-100 absolute rounded-full top-[25%] left-[10%] overflow-hidden flex justify-center items-center transition-all hover:scale-125 hover:z-50">
          <img src="/images/person4.jpg" alt="person" className="" />
        </div>
        <div className="h-96 w-96 scale-100 absolute rounded-full top-[55%] right-[10%] overflow-hidden flex justify-center items-center transition-all hover:scale-125 hover:z-50">
          <img src="/images/person5.jpg" alt="person" className="" />
        </div>
      </div>
    </main>
  );
}
