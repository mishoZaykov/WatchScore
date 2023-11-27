import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white w-full  bottom-100  m-0 shadow  dark:bg-indigo-800">
      <div className=" w-auto   mx-auto  max-w-full p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-indigo-500 sm:text-center  dark:text-indigo-400">
          © 2023 <Link>Watch Score™</Link>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
