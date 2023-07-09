import Link from "next/link";

export default function Card({ title, author, id, back }) {
  return (
    <Link
      href={`${back}/${id}`}
      className="bg-white p-5 flex flex-col gap-4 rounded-xl transition-all hover:bg-color-primary-light hover:text-white active:bg-color-primary cursor-pointer"
    >
      <span className="text-4xl">{title}</span>
      <span className="text-xl self-end">{author}</span>
    </Link>
  );
}
