import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
          <Image src="/images/logo.png" alt="Logo" width={30} height={30} />
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
          IslamicPschology</span>
        <p className="text-slate-600">Created 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
