import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
const Contact = () => {
  return (
    <div className="min-h-screen pt-32 md:pt-44 lg:pt-36 px-6 md:px-20 lg:px-32 bg-gray-50 flex flex-col gap-8 items-center justify-center">

      {/* Header */}
      <h1 className="text-3xl md:text-5xl font-bold text-center text-cyan-800">
        Contact Us
      </h1>

      {/* Contact Info Section */}
      <div className="flex flex-col gap-6 text-center max-w-2xl">
        <h2 className="text-2xl font-semibold text-cyan-700">Get in Touch</h2>
        <p className="text-gray-700 text-lg">
          We'd love to hear from you! Whether you have questions about our products or services, 
          feel free to reach out to us anytime.
        </p>
        <div className="text-gray-600 space-y-2">
          <p><strong>Email:</strong> support@onlineshop.com</p>
          <p><strong>Phone:</strong> +91 91234 56789</p>
          <p><strong>Address:</strong> 123 Market Street, Chennai, Tamil Nadu</p>
        </div>

        {/* Social Icons Placeholder */}
        <div className="flex gap-6 justify-center pt-2 pb-10">
          <div className="p-4 text-2xl bg-cyan-800 rounded-full text-white"><MdOutlineMail /></div>
          <div className="p-4 text-2xl text-white bg-cyan-800 rounded-full"><FiPhoneCall/></div>
      
        </div>
      </div>
    </div>
  );
};

export default Contact;
