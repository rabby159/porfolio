import { Link, NavLink } from "react-router-dom";
import logo from "../../public/logo.svg";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";

const Navbar = () => {
  const namOption = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/project">Project</NavLink>
      </li>
      <li>
        <NavLink to="/technologies">Technologies</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="max-w-7xl mx-auto">
      <div className="navbar bg-base-100">
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
              {namOption}
            </ul>
          </div>
          <img className="w-12" src={logo} alt="" />
          <p className=" ml-2 font-semibold text-2xl">mdrabby</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">{namOption}</ul>
        </div>
        <div className="navbar-end space-x-5 group">
          <Link
            to={"https://github.com/rabby159"}
            className="text-4xl group-hover:blur-sm hover:!blur-none"
          >
            <FaGithub></FaGithub>
          </Link>
          <Link
            to={"https://www.facebook.com/mdrabby159"}
            className="text-4xl group-hover:blur-sm hover:!blur-none"
          >
            <FaFacebook></FaFacebook>
          </Link>
          <Link
            to={"https://www.linkedin.com/in/md-rabby159/"}
            className="text-4xl group-hover:blur-sm hover:!blur-none"
          >
            <FaLinkedin></FaLinkedin>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
