import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white  w-full  bottom-0  m-0 shadow  dark:bg-gray-800">
      <div className=" w-auto  mx-auto  max-w-full p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center  dark:text-gray-400">
          © 2023 <Link>Watch Score™</Link>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
