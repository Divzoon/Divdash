import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router';
import en from '../translation/en'
import ar from "../translation/ar"
function WaliteSidenav(props) {
  const router = useRouter();
const {locale}=router;
const trans= locale==="en"?en:ar;
  return (
    <div style={{ fontFamily: "SfproText ,Poppins-Bold", width: "400" }}  className="h-80">
        <div className="  mt-9 w-full h-full  justify-center mx-auto flex absolute ">
        <div className="overflow-hidden dark:bg-[#1c222e] bg-[#333c4f]  h-20 w-20 rounded-full absolute top-0">
        <div className=" hover:scale-105 duration-500  relative mt-[8px] flex justify-center mx-auto h-20 w-20  ">
        <Image
              className=''
              src={props.companyimage}
              alt='Profile'
              layout='fill'
              loading='eager'
            /></div>
        </div>
            <div className="dark:bg-[#10141c]  bg-[#293140]  rounded-xl w-[85%] justify-center mx-auto mt-7 flex h-56">
      
        {/*content*/}
          <div className=" mt-14 mb-1 mx-2 w-full">
<div className="flex justify-center mx-auto hover:decoration-pink-500 duration-500 select-none hover:underline">
  <h1 className="text-xl">{props.companyName}</h1>

  </div>
  <div>
<div className={`${locale ==="en"?"flex  ":"flex flex-row-reverse "}${"justify-center mx-auto gap-2"}`}>
<h1  className="text-lg font-medium	text-gray-400">{trans.CurrentBalance}</h1>
<h1 className={`${parseInt(props.NextPayment )
  > parseInt(props.CurrentBalance ) ?"text-red-400":"text-green-400"}${" text-lg font-medium	"}`}>{props.CurrentBalance} $</h1>
</div>

<div className={`${locale ==="en"?"flex  ":"flex flex-row-reverse "}${"justify-center mx-auto gap-2"}`}>
<h1   className="text-lg font-medium	text-gray-400"> {trans.NextPayment}</h1>
<h1 className="text-lg font-medium	text-green-400">{props.NextPayment} $</h1>
</div>
<div className="justify-center flex  mx-auto"><h1 className="text-sm hover:underline duration-500 active:scale-95 select-none cursor-pointer			uppercase font-thin		"> {trans.LearnMore}</h1> </div>


  </div>
          </div>
            </div>
        </div>
    </div>
  )
}

export default WaliteSidenav