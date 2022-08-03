import React from "react";

const footerYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-gray-700 p-8 ">
      <p>Copyright &copy; {footerYear}</p>
    </footer>
  );
};

export default Footer;
