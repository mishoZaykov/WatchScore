import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext";

function Header() {
  const { isAuthenticated, username } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-white border-indigo-200 dark:bg-indigo-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img className="w-12 h-12 mr-3 " src="/logo.svg" alt="" />
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-indigo-500 rounded-lg md:hidden hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:text-indigo-400 dark:hover:bg-indigo-700 dark:focus:ring-indigo-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-row p-4 md:p-0 mt-4 border border-indigo-100 rounded-lg bg-indigo-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-indigo-800 md:dark:bg-indigo-900 dark:border-indigo-700">
            <li>
              <Link
                to="/posts"
                className="block py-2 pl-3 pr-4 text-indigo-900 rounded hover:bg-indigo-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 dark:text-white md:dark:hover:text-indigo-500 dark:hover:bg-indigo-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Posts
              </Link>
            </li>
            {isAuthenticated && (
              <div id="user" className="flex gap-7">
                <li>
                  <Link
                    to="/create"
                    className="block py-2 pl-3 pr-4 text-indigo-900 rounded hover:bg-indigo-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 dark:text-white md:dark:hover:text-indigo-500 dark:hover:bg-indigo-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Create
                  </Link>
                </li>

                <li>
                  <Link
                    to="/logout"
                    className="block py-2 pl-3 pr-4 text-indigo-900 rounded hover:bg-indigo-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 dark:text-white md:dark:hover:text-indigo-500 dark:hover:bg-indigo-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Logout
                  </Link>
                </li>
                <p className="block py-2 pl-3 pr-4 text-indigo-900 rounded md:hover:bg-transparent md:border-0  md:p-0 dark:text-indigo-400 ">
                  Hello, {username}
                </p>
              </div>
            )}
            {!isAuthenticated && (
              <div id="guest" className="flex gap-7">
                <li>
                  <Link
                    to="/login"
                    className="block py-2 pl-3 pr-4 text-indigo-900 rounded hover:bg-indigo-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 dark:text-white md:dark:hover:text-indigo-500 dark:hover:bg-indigo-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="block py-2 pl-3 pr-4 text-indigo-900 rounded hover:bg-indigo-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 dark:text-white md:dark:hover:text-indigo-500 dark:hover:bg-indigo-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Register
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
