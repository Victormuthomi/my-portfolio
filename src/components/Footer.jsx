import React from "react";

const Footer = () => {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer className="bg-gray-900 text-fuchsia-300 py-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} Victor Muthomi. All rights reserved.
        </p>{" "}
      </footer>
    </>
  );
};

export default Footer;
