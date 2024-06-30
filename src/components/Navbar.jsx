import { useEffect, useState } from "react";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector ,useDispatch} from "react-redux";
import { auth } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";
function themeFromLocalStorage() {
  return localStorage.getItem("theme") || "retro";
}
function Navbar() {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user);
  const [theme, setTheme] = useState(themeFromLocalStorage);
  const handleOut = async () => {
    try {
      await signOut(auth);
      toast.success("See you soon !");
      dispatch(logout())
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleTheme = () => {
    const newTheme = theme == "retro" ? "dark" : "retro";
    setTheme(newTheme);
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div className="navbar bg-base-100 site-container mt-4 mb-12">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink className="font-semibold" to="/">
                Home
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">
          ToDos
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5">
          <li>
            <NavLink className="font-semibold" to="/">
              Home
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-10 items-center">
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            className="theme-controller"
            value="synthwave"
            onClick={handleTheme}
            checked={theme == "dark"}
            readOnly
          />
          {/* moon icon */}
          <IoIosMoon className="swap-off fill-current w-8 h-8" />
          {/* sun icon */}
          <IoIosSunny className="swap-on fill-current w-8 h-8" />
        </label>
        <div className="flex items-center gap-4">
          <p className="">{user.displayName}</p>
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user.photoURL} />
            </div>
          </div>
          <button onClick={handleOut} className=" btn btn-primary">
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
