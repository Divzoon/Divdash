import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';
import Link from "next/link";

function NavLinks(props) {
    const router = useRouter();
    const {locale}=router;
    const  pid  = router.asPath
   const currentpageColor ="bg-gray-800 border-l-4 "
  return (
    <div  style={{ fontFamily: "SfproText ,Poppins-Bold", width: "400" }} >
        <Link  href={"/"} passHref>
<div className="mt-12 text-gray-200 select-none active:scale-95 duration-300 ">
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


              <div className=" select-none text-gray-200 active:scale-95 duration-300 ">
              <div className={`${ pid ==="/projects" ?currentpageColor: null} ${locale ==="en"?"flex  ":"flex flex-row-reverse "}${"m-1 hover:opacity-50   gap-2  justify-center duration-500 cursor-pointer hover:dark:bg-[#11151d]/60 hover:bg-[#111a24] backdrop-blur-md mx-3 p-1 rounded-lg "}`}>
                   <div className=" relative mt-[7px] h-5 w-5">
                   <Image
              className=''
              src={"/ico/projects.png"}
              alt='projects tap'
              layout='fill'
              loading='eager'
              priority
            />
                   </div>
                   <h4>{props.Projects}</h4>
                </div>
                
              </div>

</Link>
<Link  href={"/divchat"} passHref>


              <div className=" select-none  text-gray-200 active:scale-95 duration-300 ">
              <div className={`${ pid ==="/divchat" ?currentpageColor: null} ${locale ==="en"?"flex  ":"flex flex-row-reverse "}${"m-1 hover:opacity-50   gap-2  justify-center duration-500 cursor-pointer hover:dark:bg-[#11151d]/60 hover:bg-[#111a24] backdrop-blur-md mx-3 p-1 rounded-lg "}`}>
                  
                   <div className=" relative mt-[5px] h-5 w-5">
                   <Image
              src={"/ico/chat.png"}
              alt='messages tap'
              layout='fill'
              priority 
            />
                   </div>
                   <h4>{props.Messages}</h4>
                </div>
                
              </div>
              </Link>
<div className="mt-12"></div>

<Link  href={"/settings"} passHref>

              <div className=" select-none text-gray-200 active:scale-95 duration-300 ">
              <div className={`${ pid ==="/settings" ?currentpageColor: null} ${locale ==="en"?"flex  ":"flex flex-row-reverse "}${"m-1 hover:opacity-50   gap-2  justify-center duration-500 cursor-pointer hover:dark:bg-[#11151d]/60 hover:bg-[#111a24] backdrop-blur-md mx-3 p-1 rounded-lg "}`}>
                  
                   <div className=" relative mt-[6px] h-5 w-5">
                   <Image
              className=''
              src={"/ico/settings.png"}
              alt='setting tap'
              layout='fill'
              priority            />
                   </div>
                   <h4>{props.Settings}</h4>
                </div>
                
              </div>
</Link>
<Link  href={"/help"} passHref>


              <div className=" select-none text-gray-200 active:scale-95 duration-300 ">
              <div className={` ${ pid ==="/help" ?currentpageColor: null} ${locale ==="en"?"flex  ":"flex flex-row-reverse "}${"m-1 hover:opacity-50   gap-2  justify-center duration-500 cursor-pointer hover:dark:bg-[#11151d]/60 hover:bg-[#111a24] backdrop-blur-md mx-3 p-1 rounded-lg "}`}>
                  
                   <div className=" relative mt-[6px] h-5 w-5">
                   <Image
              className=''
              src={"/ico/help.png"}
              alt='Help tap'
              layout='fill'
              priority            />
                   </div>
                   <h4>{props.help}</h4>
                </div>
                
              </div>
              </Link>

    </div>
  )
}

export default NavLinks