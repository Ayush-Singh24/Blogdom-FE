import Link from "next/link";

export default function SearchBox({ searchInput, setSearchInput }) {
  return (
    <div className="flex gap-5 bg-color-card-container justify-center items-center py-2 px-4 lg:justify-between">
      <img
        src="/images/blogdom_icon.png"
        alt="logo"
        className="h-20 hidden sm:block transition-all hover:rotate-6 hover:-translate-y-1"
      />
      <input
        type="text"
        placeholder="Search"
        name="blog-search"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value.trimStart())}
        className="rounded-full p-4 w-[80%] text-2xl lg:w-1/2 sm:mx-auto"
      />
      <nav className="hidden lg:flex lg:gap-10 lg:p-5 lg:text-2xl lg:font-semibold text-color-secondary">
        <Link
          href="/allblogs"
          className="relative before:content-[''] before:h-1  before:absolute before:top-full before:left-0 before:w-0 before:transition-all before:bg-color-primary-light hover:before:w-full"
        >
          Home
        </Link>
        <Link
          href="/newblog"
          className="relative  before:content-[''] before:h-1 before:absolute before:top-full before:left-0 before:w-0 before:transition-all before:bg-color-primary-light hover:before:w-full"
        >
          New Blog
        </Link>
        <Link
          href="/myblogs"
          className="relative  before:content-[''] before:h-1 before:absolute before:top-full before:left-0 before:w-0 before:transition-all before:bg-color-primary-light hover:before:w-full"
        >
          My Blogs
        </Link>
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
