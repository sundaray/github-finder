import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";

const Navbar = ({ title }) => {
  return (
    <nav className="mb-12 shadow-md">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-sm rounded">
              Home
            </Link>
            <Link to="/about" className="btn btn-sm rounded">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

Navbar.defaultProps = { title: "GitHUb Finder" };

Navbar.propTypes = {
  title: PropTypes.string,
};
