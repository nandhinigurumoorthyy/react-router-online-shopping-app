import React from "react";
import { FaInstagram, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const AppFooter = () => {
  return (
    <div className="bg-cyan-900 flex flex-col md:flex-row text-white shadow-lg p-6 md:p-10 justify-between items-center gap-5">
      <p className="text-lg md:text-2xl text-center">
        Thank you for visiting our page !!!
      </p>
      <div className="flex text-2xl gap-6 md:gap-9">
        <FaInstagram className="hover:text-cyan-400 cursor-pointer" />
        <FaXTwitter className="hover:text-cyan-400 cursor-pointer" />
        <FaFacebookF className="hover:text-cyan-400 cursor-pointer" />
        <FaWhatsapp className="hover:text-cyan-400 cursor-pointer" />
      </div>
    </div>
  );
};

export default AppFooter;
