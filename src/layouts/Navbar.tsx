
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { setUser } from "../redux/Features/user/userSlice";
import { toast } from "react-toastify";

function Navbar() {
  const { user } = useAppSelector((state) => state.user);
  // console.log("user", user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth).then(() => {
      dispatch(setUser(null));
      toast.error("Successfully Logout", {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/");
    });
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/books">All Books</Link>
            </li>
            <li>
              {user.email && (
                <>
                  <Link to="/add_book">Add New</Link>
                </>
              )}
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Book Catalog
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <Link to="/books">
          <ul className="menu menu-horizontal px-3 mx-2  hover:border-black bg-white border border-gray-200 rounded-lg">
            All Books
          </ul>
        </Link>

        {user.email && (
          <>
            <Link to="/add_book">
              <ul className="menu menu-horizontal px-3  mx-2 bg-white border border-gray-200 hover:border-black rounded-lg">
                Add New
              </ul>
            </Link>
          </>
        )}
      </div>
      <div className="navbar-end">
        {!user.email && (
          <>
            <button className="btn">
              <Link to="/signup" className="justify-between">
                Signup
              </Link>
            </button>
          </>
        )}
        {user.email && (
          <>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>{user.email}</a>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
