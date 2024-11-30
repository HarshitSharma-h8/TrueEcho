import React from "react";

const Footer = () => {
  return (
    <footer className="text-center p-4 md:p-6 bg-gray-900 text-white">
      © {new Date().getFullYear()} TrueEcho. All rights reserved.
    </footer>
  );
};

export default Footer;
