import { useRouter } from "next/router";
import Image from "next/image";
import imagescontact from "../public/Images/auth.png";
import { useState, React } from "react";
import en from '../translation/en'
import ar from "../translation/ar"
function AuthPage() {
    const router = useRouter();
    const {locale}=router;
      const trans= locale==="en"?en:ar;


    const [nameRing, setnameRing] = useState(false);
    const [emailRing, setemailRing] = useState(false);
    const [messageRing, setmessageRing] = useState(false);
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
      }} className=' max-w-7xl p-2 relative pt-20  m-auto  justify-center'>
            

            <div className=' w-full  mb-12 '>
              <div className='relative text-gray-200  min-h-[200px] rounded-md  '>
                <div className='grid md:grid-cols-2 mt-3   items-center justify-center'>
                  <div className='md:block hidden'>
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
                    action="https://formsubmit.co/support@divzoon.com" 


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
                            label='Name'
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
                          ${emailRing ? "ring-2 duration-100" : ""}${router.asPath.includes(`/ar`)?"text-left":"text-right"} `}
                            label='Email'
                            name='email'
                            type='email'
                            minLength={8} maxLength={100}
                            placeholder={trans.emailPlaceHolder}
                            required
                          />
                        </div>

                        <div className='w-full'>
                          <p                         style={{ fontFamily: "Poppins-Bold , SfproText" , width: "400" }}
 className={`${router.asPath.includes("/ar")?"text-left":"text-right"}${' ml-1 my-1'}`}>{trans.Pass}</p>
                          <input
                            onClick={() => {
                                
                                setmessageRing(!nameRing);
                              setemailRing(false);
                              setnameRing(false);
                            }}
                           
                            className={`
                            w-full  rounded-md h-12 px-2 sm:px-2 py-1 text-gray-400 bg-gray-700/20
                            ${messageRing ? "ring-2 duration-100" : ""}  ${router.asPath.includes(`/ar`)?"text-left":"text-right"}`}
                            label='Name'
                            name='name'
                            type="password"
                            placeholder={trans.passPlaceHolder}
                            minLength={8} maxLength={30}
                            required
                          />
                          
                        </div>
                        <div className=' w-full m-1 mt-2 select-none rounded-md text-center  px-2 gap-1 bg-gray-700/20'>
                          {" "}
                          <p className='my-2 font-semibold'>You Need :</p>
                          <div className='flex md:flex-none flex-wrap w-full relative mb-2 text-sm rounded-md  px-2 gap-1 bg-gray-700/20'>
                            <div className='hover:bg-gray-400/20  cursor-pointer select-none active:scale-95 duration-300 px-1 rounded-md my-1  justify-center mx-auto gap-1 flex '>
                              {" "}
                              <label
                                className='cursor-pointer font-semibold'
                                htmlFor='web'>
                                <input
                                  className='mt-[5px]'
                                  type='radio'
                                  name='Need'
                                  id='web'
                                  value='website'
                                
                                  required
                                />{" "}
                                Web development
                              </label>
                            </div>
                            <div className='hover:bg-gray-400/20 cursor-pointer select-none active:scale-95 duration-300 px-1 rounded-md my-1  justify-center mx-auto gap-1 flex '>
                              {" "}
                              <label
                                className='cursor-pointer font-semibold'
                                htmlFor='app'>
                                <input
                                  className='mt-[5px]'
                                  type='radio'
                                  id='app'
                                  value='application'
                                  name='Need'
                               
                                />{" "}
                                App development
                              </label>
                            </div>

                            <div className='hover:bg-gray-400/20 cursor-pointer select-none active:scale-95 duration-300 px-1 rounded-md my-1  justify-center mx-auto gap-1 flex '>
                              {" "}
                              <label
                                className='cursor-pointer font-semibold'
                                htmlFor='Hire'>
                                {" "}
                                <input
                                  className='mt-[5px]'
                                  type='radio'
                                  id='Hire'
                                  name='Need'
                                  value='Hire Dev'
                                
                                />{" "}
                                Hire Developers
                              </label>
                            </div>

                            <div className='hover:bg-gray-400/20 cursor-pointer select-none active:scale-95 duration-300 px-1 rounded-md my-1  justify-center mx-auto gap-1 flex '>
                              {" "}
                              <label
                                className='cursor-pointer font-semibold'
                                htmlFor='other'>
                                {" "}
                                <input
                                  className='mt-[5px]'
                                  type='radio'
                                  id='other'
                                  name='Need'
                                  value='other'
                                  
                                />{" "}
                                Other{" "}
                              </label>
                            </div>
                          </div>
                        </div>

                      

                        <button
                          className='w-full max-w-[200px] m-2 duration-300 select-none bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-400/90 focus:outline-none focus:shadow-outline'
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