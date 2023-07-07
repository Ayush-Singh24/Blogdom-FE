export default function SearchBox() {
  return (
    <div className="flex gap-5 bg-color-card-container justify-center items-center p-2">
      <input
        type="text"
        placeholder="Search"
        name="blog-search"
        className="rounded-full p-4 w-[80%] text-2xl"
      />
      <label htmlFor="blog-search">
        <img
          src="/icons/search.svg"
          alt="search"
          className="bg-white p-4 rounded-full"
        />
      </label>
    </div>
  );
}
