import Link from "next/link";

export default function SearchBox({ searchInput, setSearchInput }) {
  return (
    <div className="flex gap-5 bg-color-card-container justify-center items-center p-2">
      <input
        type="text"
        placeholder="Search"
        name="blog-search"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value.trimStart())}
        className="rounded-full p-4 w-[80%] text-2xl"
      />
      <nav className="hidden lg:flex lg:gap-5 lg:p-5 lg:text-2xl">
        <Link href="/allblogs">Home</Link>
        <Link href="/newblog">New Blog</Link>
        <Link href="/myblogs">My Blogs</Link>
      </nav>
      {/* <label htmlFor="blog-search">
        <img
          src="/icons/search.svg"
          alt="search"
          className="bg-white p-4 rounded-full"
        />
      </label> */}
    </div>
  );
}
