import React from "react";

function Footer(props) {
  const currentYear: number = new Date().getFullYear();

  return (
    <div className=" absolute bottom-0 w-full bg-[#0d151d] dark:bg-[#040506] font-sans font-semibold duration-500 hover:text-red-500 justify-center text-center h-12 pt-2 text-gray-300">
      <a
        href="https://www.divzoon.com/"
        className="text-xs sm:text-md  text-white duration-500 hover:text-red-500"
      >
        {props.footerTrans == "ar" ? (
          <span> Divzoon © {currentYear} - 2018 جميع الحقوق محفوظة </span>
        ) : (
          <span> Divzoon © {currentYear} - 2018 All Rights Reserved </span>
        )}
      </a>
    </div>
  );
}

export default Footer;
