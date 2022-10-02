import React from "react";
import en from "../translation/en";
import ar from "../translation/ar";
import { useRouter } from "next/router";
function index() {
  const router = useRouter();
  const { locale } = router;
  const trans = locale === "en" ? en : ar;
 let ltr =locale === "en" ?false:true;
  return (
  <div className={`${"dark:bg-[#0b0e11] dark:text-gray-200 bg-gray-300   h-full lg:pl-[310px]  pt-[60px]  "}${locale === "ar"?"lg:pr-[50px] pr-[10px]":null}`}>
    <div dir={locale === "en"?"ltr":"rtl"}  >
      <h1  style={{ fontFamily: "Poppins-bold", width: "400" }} className="text-4xl  lg:text-6xl pb-0 p-2">{trans.Dashboard}</h1>
    <p className=" font-semibold	dark:text-gray-400 text-gray-900   opacity-80 pt-0 p-2 text-xl backdrop-blur-lg	">{trans.DashPcalltoaction}</p>
    </div>
  </div>
  );
}

export default index;
