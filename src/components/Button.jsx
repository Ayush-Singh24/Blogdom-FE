import Link from "next/link";

export default function Button({ text, route }) {
  return (
    <Link href={route}>
      <button className="text-3xl bg-color-primary-light px-3 py-3 rounded-md text-white hover:bg-color-primary transition-all">
        {text}
      </button>
    </Link>
  );
}
