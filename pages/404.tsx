import React from "react";
import Image from "next/image";
import en from "../translation/en";
import ar from "../translation/ar";
import { useRouter } from "next/router";

function FoureoFoure() {
  const router = useRouter();
  const { locale } = router;
  const trans = locale === "en" ? en : ar;
  return (
    <div className="lg:pl-72 relative w-full dark:bg-[#0b0e11] bg-gray-300  backdrop-blur-md	   h-screen ">
      <div className="flex m-auto justify-center pt-12">
        <div className="mt-[30%] lg:mt-[15%]">
          <Image
            id="404image"
            src="/Images/404.png "
            alt="This page is not found :("
            objectFit="cover"
            width={300}
            height={300}
            priority
          />
          <a
            aria-label="Go Home"
            className="select-none font-bold max-w-[300px]  bg-white mt-2 sm:mt-0 shadow-md  hover:shadow-red-500/50  ring-2  ring-slate-900 hover:bg-gray-300 focus:outline-none focus:ring-1 opacity-90  focus:ring-offset-2 active:scale-95 duration-100 0  text-gray-900  h-12 px-1  sm:px-28  rounded-lg w-full flex items-center justify-center sm:w-auto highlight-white/20 "
            href={"/"}
          >
            {trans.HomeBtn}
          </a>
        </div>
      </div>
    </div>
  );
}

export default FoureoFoure;
