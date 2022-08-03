import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="text-center">
        <div className="max-w-lg font-bold mb-8">
          <h1>Oops</h1>
          <p className="text-5xl mb-8">404 - Page not found!</p>
          <Link to="/">
            <FaHome className="mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
