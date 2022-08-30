import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router';
import WaliteSidenav from './WaliteSidenav';
import Link from "next/link";

function Sidebar(props) {
  const router = useRouter();
  const {locale}=router;
  const  pid  = router.asPath
 const currentpageColor ="bg-gray-800 border-l-4 "

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
            <Link  href={"/"} passHref>
<div className="mt-12 select-none active:scale-95 duration-300 ">
                <div className={`${ pid ==="/" ?currentpageColor: null} ${locale ==="en"?"flex  ":"flex flex-row-reverse "}${"m-1 hover:opacity-50   gap-2  justify-center duration-500 cursor-pointer hover:dark:bg-[#11151d]/60 hover:bg-[#111a24] backdrop-blur-md mx-3 p-1 rounded-lg "}`}>
                  
                   <div className=" relative mt-[6px] h-5 w-5">
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
</Link>

<Link  href={"/projects"} passHref>


              <div className=" select-none  active:scale-95 duration-300 ">
              <div className={`${ pid ==="/projects" ?currentpageColor: null} ${locale ==="en"?"flex  ":"flex flex-row-reverse "}${"m-1 hover:opacity-50   gap-2  justify-center duration-500 cursor-pointer hover:dark:bg-[#11151d]/60 hover:bg-[#111a24] backdrop-blur-md mx-3 p-1 rounded-lg "}`}>
                   <div className=" relative mt-[7px] h-5 w-5">
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

</Link>
<Link  href={"/divchat"} passHref>


              <div className=" select-none  active:scale-95 duration-300 ">
              <div className={`${ pid ==="/divchat" ?currentpageColor: null} ${locale ==="en"?"flex  ":"flex flex-row-reverse "}${"m-1 hover:opacity-50   gap-2  justify-center duration-500 cursor-pointer hover:dark:bg-[#11151d]/60 hover:bg-[#111a24] backdrop-blur-md mx-3 p-1 rounded-lg "}`}>
                  
                   <div className=" relative mt-[5px] h-6 w-6">
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
              </Link>
<div className="mt-12"></div>

<Link  href={"/settings"} passHref>

              <div className=" select-none  active:scale-95 duration-300 ">
              <div className={`${ pid ==="/settings" ?currentpageColor: null} ${locale ==="en"?"flex  ":"flex flex-row-reverse "}${"m-1 hover:opacity-50   gap-2  justify-center duration-500 cursor-pointer hover:dark:bg-[#11151d]/60 hover:bg-[#111a24] backdrop-blur-md mx-3 p-1 rounded-lg "}`}>
                  
                   <div className=" relative mt-[6px] h-5 w-5">
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
</Link>
<Link  href={"/help"} passHref>


              <div className=" select-none  active:scale-95 duration-300 ">
              <div className={` ${ pid ==="/help" ?currentpageColor: null} ${locale ==="en"?"flex  ":"flex flex-row-reverse "}${"m-1 hover:opacity-50   gap-2  justify-center duration-500 cursor-pointer hover:dark:bg-[#11151d]/60 hover:bg-[#111a24] backdrop-blur-md mx-3 p-1 rounded-lg "}`}>
                  
                   <div className=" relative mt-[6px] h-5 w-5">
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
              </Link>

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