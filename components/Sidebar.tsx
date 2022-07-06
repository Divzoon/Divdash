import Image from 'next/image'
import React from 'react'

function Sidebar() {
  return (
    <div className=" text-white dark:bg-[#080a0e]  flex-row z-40   bg-[#0d151d] fixed h-full max-w-[340px] w-[200px] lg:w-[300px]  text-white">
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
              <div className="mt-12 select-none ">
                <div className="m-1 hover:opacity-50   gap-2 flex justify-center duration-500 cursor-pointer hover:dark:bg-[#11151d]/60 hover:bg-[#111a24] backdrop-blur-md mx-3 p-1 rounded-lg ">
                  
                   <div className=" relative mt-[8px] h-4 w-4">
                   <Image
              className=''
              src={"/ico/main.png"}
              alt='divzoon'
              layout='fill'
              loading='eager'
            />
                   </div>
                   <h4>Home</h4>
                </div>
                
              </div>
          </div>
        
    </div>
  )
}

export default Sidebar