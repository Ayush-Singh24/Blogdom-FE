export default function Card({ title, author }) {
  return (
    <div className="bg-white p-5 flex flex-col gap-4 rounded-xl">
      <span className="text-4xl">{title}</span>
      <span className="text-xl self-end">{author}</span>
    </div>
  );
}
