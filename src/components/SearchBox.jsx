import { openAlert } from "@/redux/reducers/alert";
import { Service } from "@/service/service";
import { AlertStatus, ResponseStatus } from "@/utils/constants";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

export default function SearchBox({ searchInput, setSearchInput }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const response = await Service.logout();
    if (response.status === ResponseStatus.Ok) {
      dispatch(
        openAlert({ status: AlertStatus.Success, message: response.message })
      );
      router.push("/");
    } else {
      dispatch(
        openAlert({ status: AlertStatus.Error, message: response.message })
      );
    }
  };

  return (
    <div className="flex items-center justify-center gap-5 px-4 py-2 bg-color-card-container lg:justify-between">
      <img
        src="/images/blogdom_icon.png"
        alt="logo"
        className="hidden h-20 transition-all sm:block hover:rotate-6 hover:-translate-y-1"
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
        <button
          className="relative  before:content-[''] before:h-1 before:absolute before:top-full before:left-0 before:w-0 before:transition-all before:bg-color-primary-light hover:before:w-full"
          onClick={handleLogout}
        >
          Logout
        </button>
      </nav>
      {/* <label htmlFor="blog-search">
        <img
          src="/icons/search.svg"
          alt="search"
          className="p-4 bg-white rounded-full"
        />
      </label> */}
    </div>
  );
}
