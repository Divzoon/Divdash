import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router';
import WaliteSidenav from './WaliteSidenav';
function Sidebar(props) {
  const router = useRouter();
  const {locale}=router;

  return (
    <div style={{ fontFamily: "SfproText ,Poppins-Bold", width: "400" }} className=" lg:block hidden dark:bg-[#05060A]  flex-row z-40   bg-[#0d151d] fixed h-full max-w-[340px] w-[200px] lg:w-[300px]  text-white">
         <div className=' pt-28  '>
           <div className="justify-center mx-auto flex"><Image
              className='hover:opacity-50   duration-700'
              src={"/ico/1.png"}
              alt='divzoon'
              height='26'
              width='110'
              loading='eager'
              quality={100}
            />
            </div>
              <div className="mt-12 select-none active:scale-95 duration-300 ">
                <div className={`${locale ==="en"?"flex  ":"flex flex-row-reverse "}${"m-1 hover:opacity-50   gap-2  justify-center duration-500 cursor-pointer hover:dark:bg-[#11151d]/60 hover:bg-[#111a24] backdrop-blur-md mx-3 p-1 rounded-lg "}`}>
                  
                   <div className=" relative mt-[8px] h-5 w-5">
                   <Image
              className=''
              src={"/ico/main.png"}
              alt='Home tap'
              layout='fill'
              loading='eager'
            />
                   </div>
                   <h4>{props.Home}</h4>
                </div>
                
              </div>
             
             
              <div className=" select-none  active:scale-95 duration-300 ">
              <div className={`${locale ==="en"?"flex  ":"flex flex-row-reverse "}${"m-1 hover:opacity-50   gap-2  justify-center duration-500 cursor-pointer hover:dark:bg-[#11151d]/60 hover:bg-[#111a24] backdrop-blur-md mx-3 p-1 rounded-lg "}`}>
                  
                   <div className=" relative mt-[8px] h-5 w-5">
                   <Image
              className=''
              src={"/ico/projects.png"}
              alt='projects tap'
              layout='fill'
              loading='eager'
            />
                   </div>
                   <h4>{props.Projects}</h4>
                </div>
                
              </div>



              <div className=" select-none  active:scale-95 duration-300 ">
              <div className={`${locale ==="en"?"flex  ":"flex flex-row-reverse "}${"m-1 hover:opacity-50   gap-2  justify-center duration-500 cursor-pointer hover:dark:bg-[#11151d]/60 hover:bg-[#111a24] backdrop-blur-md mx-3 p-1 rounded-lg "}`}>
                  
                   <div className=" relative mt-[8px] h-6 w-6">
                   <Image
              className=''
              src={"/ico/chat.png"}
              alt='messages tap'
              layout='fill'
              loading='eager'
            />
                   </div>
                   <h4>{props.Messages}</h4>
                </div>
                
              </div>
<div className="mt-12"></div>

              <div className=" select-none  active:scale-95 duration-300 ">
              <div className={`${locale ==="en"?"flex  ":"flex flex-row-reverse "}${"m-1 hover:opacity-50   gap-2  justify-center duration-500 cursor-pointer hover:dark:bg-[#11151d]/60 hover:bg-[#111a24] backdrop-blur-md mx-3 p-1 rounded-lg "}`}>
                  
                   <div className=" relative mt-[8px] h-5 w-5">
                   <Image
              className=''
              src={"/ico/settings.png"}
              alt='setting tap'
              layout='fill'
              loading='eager'
            />
                   </div>
                   <h4>{props.Settings}</h4>
                </div>
                
              </div>



              <div className=" select-none  active:scale-95 duration-300 ">
              <div className={`${locale ==="en"?"flex  ":"flex flex-row-reverse "}${"m-1 hover:opacity-50   gap-2  justify-center duration-500 cursor-pointer hover:dark:bg-[#11151d]/60 hover:bg-[#111a24] backdrop-blur-md mx-3 p-1 rounded-lg "}`}>
                  
                   <div className=" relative mt-[8px] h-5 w-5">
                   <Image
              className=''
              src={"/ico/help.png"}
              alt='Help tap'
              layout='fill'
              loading='eager'
            />
                   </div>
                   <h4>{props.help}</h4>
                </div>
                
              </div>

          </div>
        <div className="absolute bottom-5 w-full ">
          <WaliteSidenav
        companyimage="/ico/user.png"
        companyName="Clinet Name"
        CurrentBalance="400"
        NextPayment="2000"
        /></div>
    </div>
  )
}

export default Sidebar