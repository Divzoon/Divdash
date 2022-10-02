import React from 'react'
import en from "../translation/en";
import ar from "../translation/ar";
import { useRouter } from "next/router";
function DashHeader() {
    const router = useRouter();
    const { locale } = router;
    const trans = locale === "en" ? en : ar;

  return (
<div className={`${locale === "ar"?"lg:pr-[50px] pr-[10px]":null}`}>
    <div dir={locale === "en"?"ltr":"rtl"}  >
      <h1  style={{ fontFamily: "Poppins-bold", width: "400" }} className="text-4xl  lg:text-6xl pb-0 p-2">{trans.Dashboard}</h1>
    <p className=" font-semibold	dark:text-gray-400 text-gray-900   opacity-80 pt-0 p-2 text-xl backdrop-blur-lg	">{trans.DashPcalltoaction}</p>
    </div>
  </div>
  )
}

export default DashHeader