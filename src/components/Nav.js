import { HiMenu, HiSearch, HiChevronRight } from "react-icons/hi";
import { IoIosSearch, IoIosMenu } from "react-icons/io";
import { IoCaretDownSharp } from "react-icons/io5";
import { BiMenu } from "react-icons/bi";

const NavSmMd = () => {
  return (
    <div className="flex items-center p-2 px-4 text-main-50">
      <div>
        <h1 className="text-2xl font-bold ">It All Starts Here!</h1>
        <div className="flex items-center space-x-1">
          <button className="m-0 text-xs text-main-100">Bengaluru</button>
          <HiChevronRight className="w-3 h-3" />
        </div>
      </div>
      <div className="ml-auto">
        <IoIosSearch className="w-7 h-7" />
      </div>
    </div>
  );
};

const NavLg = () => {
  return (
    <nav className="flex p-4">
      <div className="px-4 img-div">
        <img
          className=""
          src="https://in.bmscdn.com/webin/common/icons/logo.svg"
          alt="Book my show Logo"
        />
      </div>
      <form className="flex w-full max-w-xl bg-white rounded cursor-text">
        <div className="flex items-center mx-1 text-black ">
          <IoIosSearch className="w-4 h-4 mx-2 " />
        </div>
        <input
          className="w-full rounded-r outline-none "
          placeholder="Search for movies, events, Plays, Sports and Activities."
          type="search"
        />
      </form>
      <div className="flex items-center ml-auto mr-4 space-x-4">
        <div className="flex items-center space-x-1 text-main-100">
          <button className="m-0 text-sm ">Bengaluru</button>
          <IoCaretDownSharp className="w-3 h-3 " />
        </div>
        <button className="px-4 py-1 text-xs rounded text-main-50 bg-secondary-300">
          Sign In
        </button>
        <BiMenu className="w-8 h-8 cursor-pointer text-main-50" />
      </div>
    </nav>
  );
};

const Navigation = () => {
  <div>
    <div></div>
    <div></div>
  </div>;
};

function Nav() {
  return (
    <nav className="bg-main-700">
      <div className="mx-auto max-w-screen-2xl ">
        <div className="lg:hidden">
          <NavSmMd />
        </div>
        <div className="hidden lg:block">
          <NavLg />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
