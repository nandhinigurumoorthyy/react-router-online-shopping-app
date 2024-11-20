import React from "react";
import { FaInstagram, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const AppFooter = () => {
  return (
    <div className="bg-zinc-300  flex shadow-lg p-10 justify-between">
      <p className="font-mono text-xl flex items-center justify-center">
        Thank you for visiting our page !!!
      </p>
      <div className="flex text-2xl gap-9">
        <FaInstagram />
        <FaXTwitter />
        <FaFacebookF />
        <FaWhatsapp />
      </div>
    </div>
  );
};

export default AppFooter;
