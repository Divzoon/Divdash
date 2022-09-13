import { useRouter } from "next/router";
import Image from "next/image";
import imagescontact from "../public/Images/auth.png";
import React, { useState } from 'react';
import en from '../translation/en'
import ar from "../translation/ar"
import { Checkbox } from "@nextui-org/react";

function AuthPage() {
    const router = useRouter();
    const {locale}=router;
      const trans= locale==="en"?en:ar;


    const [nameRing, setnameRing] = useState(false);
    const [emailRing, setemailRing] = useState(false);
    const [messageRing, setmessageRing] = useState(false);
    const [seePass, setSeePass] = useState(false);

  return (

      <div className=' bg-[#0b1121] h-screen   pb-12'>
        <div>
        <header className='  z-120   opacity-1 bg-gray-900 backdrop-blur-md sticky top-0 h-15 flex justify-center items-center font-semibold uppercase'>

<div className='hover:opacity-75 cursor-pointer select-none duration-300 px-4 rounded-xl py-1'>
  <Image
              src='/ico/1.png'
    alt='Divzoon'
    height='26'
    width='118'
  />
</div>
</header>
        </div>
       
          <div       style={{
        scrollBehavior: "smooth",
        boxSizing: "border-box",
        fontFamily: "Poppins, sans-serif",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "1.5",
        color: "#212529",
        textAlign: "center",

        outline: "0",
        verticalAlign: "baseline",
        position: "relative",
        display: "block",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }} className=' max-w-7xl p-2 relative pt-20   m-auto  justify-center'>
            

            <div className=' w-full  mb-12 '>
              <div className='relative text-gray-200  min-h-[200px] rounded-md  '>
                <div className='grid lg:grid-cols-2 mt-3   items-center justify-center'>
                 
                 
                  <div className='lg:block hidden'>
                    <div className='h-[150px] hover:scale-105 duration-1000 md:h-[440px] mb-6 relative'>
                      <Image
                        alt='Header'
                        layout='fill'
                        objectFit='contain'
                        src={imagescontact}
                        placeholder='blur'
                        blurDataURL={`/_next/image?url=${imagescontact}&w=16&q=1`}
                      />
                    </div>
                    <div className='relative pt-3 '>
                      <h1
                        style={{ fontFamily: "Poppins-Bold", width: "400" }}
                        className='px-1 text-center text-white md:text-2xl lg:text-3xl text-lg font-bold'>
                        <span key='coloredText5' className=' select-none '>
                          Changing The Way People Do
                        </span>
                        <span key='coloredText6' className=' select-none '>
                          {" "}
                        </span>
                        <span
                          key='coloredText7'
                          className=' select-none  header text-red-400'>
                          Business.
                        </span>
                        <p
                          style={{ fontFamily: "Poppins-Bold", width: "400" }}
                          className='  ml-2 hidden md:block lg:text-xl  text-gray-400'>
                          Learn how to engage with your visitors and teach them
                          about your mission. We &apos; re revolutionizing the
                          way customers and businesses interact.
                        </p>
                      </h1>
                    </div>
                  </div>
                  <div>
                    <form
                      className='flex  flex-col my-12  items-center lg:justify-start justify-center '
                      method='POST'
                  >
                      <h4
                        style={{ fontFamily: "Poppins-Bold , SfproText" , width: "400" }}
                        className='px-1 pb-2 text-gray-50  text-center lg:text-left  md:text-xl lg:text-2xl text-2xl font-bold'>
                      {trans.Createacount}
                      </h4>
                      <div
                        style={{ fontFamily: "Poppins-Bold , SfproText" , width: "400" }}
                        className='flex flex-col lg:w-[400px] min-w-[300px] text-white rounded-md  p-2 items-center justify-center'>
                        <div  className='w-full'>
                          <p                         style={{ fontFamily: "Poppins-Bold , SfproText" , width: "400" }}
 className={`${router.asPath.includes(`/ar`)?"text-left":"text-right"}${' ml-1 my-1'}`}>{trans.BusinessName}</p>
                          <input
                            onClick={() => {
                              setnameRing(!nameRing);
                              setemailRing(false);
                              setmessageRing(false);
                            }}
                           
                            className={`
                            w-full  rounded-md h-12 px-2 sm:px-2 py-1 text-gray-400 bg-gray-700/20
                            ${nameRing ? "ring-2 duration-100" : ""}`}
                            name='name'
                            type='text'
                            minLength={1} maxLength={20}

                            required
                          />
                          
                        </div>
                        
                        
                        
                        
                        <div className='w-full '>
                          <p                         style={{ fontFamily: "Poppins-Bold , SfproText" , width: "400" }}
 className={`${router.asPath.includes(`/ar`)?"text-left":"text-right"}${' ml-1 my-1'}`}>{trans.Email} </p>

                          <input
                            onClick={() => {
                              setemailRing(!emailRing);
                              setnameRing(false);
                              setmessageRing(false);
                            }}
                          
                            className={`
                          w-full  rounded-md h-12 px-2 sm:px-2 py-1 text-gray-400 bg-gray-700/20
                          ${emailRing ? "ring-2 duration-100" : ""} ${router.asPath.includes(`/ar`)?"text-left":"text-right"} `}
  
                            name='email'
                            type='email'
                            minLength={8} maxLength={100}
                            placeholder={trans.emailPlaceHolder}
                            required
                          />
                        </div>

                        <div className='w-full'>
                          <p                         style={{ fontFamily: "Poppins-Bold , SfproText" , width: "400" }}
 className={`${router.asPath.includes("/ar")?"text-left":"text-right"}${' relative ml-1 my-1'}`}>{trans.Pass}</p>
<div className="relative">
<input
                            onClick={() => {
                                
                                setmessageRing(!nameRing);
                              setemailRing(false);
                              setnameRing(false);
                            }}
                           
                            className={`
                            w-full  rounded-md h-12 px-2 sm:px-2 py-1 text-gray-400 bg-gray-700/20
                            ${messageRing ? "ring-2 duration-100" : ""}  ${router.asPath.includes(`/ar`)?"text-left":"text-right"}`}
                            name='name'
                            type={seePass?"text":"password"}
                            placeholder={trans.passPlaceHolder}
                            minLength={8} maxLength={30}
                            required
                          /> 
<div onClick={()=>{
    setSeePass(!seePass)
}} className={`${"h-5 w-5 cursor-pointer absolute top-3 mx-2"} ${router.asPath.includes(`/ar`)?"right-2":"left-2"}`}>
<Image src={`${"/ico/eye/"}${seePass?"open.png":"close.png"}`} layout="fill"/> 

</div>
</div>
                        </div>
                       
<div className="text-gray-50" >
<Checkbox defaultSelected={true}>
<p className="text-gray-50 text-sm mt-4" style={{ fontFamily: "Poppins-Bold , SfproText" , width: "400" }}   >I want to receive news, feature updates, discounts, and offers from Termly.</p>
    </Checkbox>
    <p className="text-xs mt-3" style={{ fontFamily: "Poppins-Bold , SfproText" , width: "400" }}>By signing up, I agree to Divzoon's <span  className="hover:opacity-75 cursor-pointer duration-300 text-red-400"> Terms and Conditions </span> and  <span className="hover:opacity-75 cursor-pointer duration-300 text-red-400"> Privacy Policy </span>.</p>
</div>
                      

                        <button
                          className='w-full  m-2 duration-300 select-none bg-red-500 text-white font-bold py-4 px-4 rounded-md hover:bg-red-400/90 focus:outline-none focus:shadow-outline'
                          type='submit'>
                          Send
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    
  )
}

export default AuthPage