import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext";

function Header() {
  const { isAuthenticated, username } = useContext(AuthContext);

  return (
    <nav className="bg-white border-indigo-200 dark:bg-indigo-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Watch Score
          </span>
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-indigo-100 rounded-lg bg-indigo-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-indigo-800 md:dark:bg-indigo-900 dark:border-indigo-700">

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
                    to="/profile"
                    className="block py-2 pl-3 pr-4 text-indigo-900 rounded hover:bg-indigo-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 md:p-0 dark:text-white md:dark:hover:text-indigo-500 dark:hover:bg-indigo-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    {username}'s Profile
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
