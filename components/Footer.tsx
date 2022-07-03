import React from 'react'
import { useRouter } from "next/router";

function Footer() {
  const currentYear:number = new Date().getFullYear();
  const router = useRouter();

  return (

<div className=" absolute bottom-0 w-full bg-slate-800 dark:bg-[#080a0e] font-sans font-semibold duration-500 hover:text-red-500 justify-center text-center h-12 pt-2 text-gray-300" >
<a  href="https://www.divzoon.com/"
className="text-xs sm:text-md text-white duration-500 hover:text-red-500">
<span >  Divzoon © {currentYear} - 2018 All Rights Reserved </span>
</a>
</div>

  )
}

export default Footer