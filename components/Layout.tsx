import React, { ReactNode,useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';

type Props = {
  children?: ReactNode
  title?: string
}

function Layout ( props ) {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [transMenu, setTransMenu] = useState(false);

  const toggler = () => {
    setBurgerMenu(!burgerMenu);
    let x = document.getElementById("togglerDiv");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block ";
    }
  };

  const router = useRouter();
  const {locale}=router;

  return (
    <div>

    <header>
     














    <div   style={{ fontFamily: "Poppins-bold", width: "400" }}
      className={
   
           "   active z-50 mt-12 justify-center  backdrop-blur-sm   dark:bg-[#10141c] bg-gray-900 fixed   w-full "
          
      }>
      <div className='px-4  grid grid-cols-3 py-1 max-w-[1800px] mx-auto  w-full    h-[50px]'>
        <Link href={props.herflogoLink} passHref>
          <div className=' pt-1  select-none cursor-pointer '>
           
          </div>
        </Link>
        <div className='lg:flex pt-2 hidden text-stone-100 select-none cursor-pointer  gap-4 justify-center mx-8'>
          <Link href={props.HerfService} passHref>
            <h5 className='duration-500 hover:text-gray-500'>Services</h5>
          </Link>

          <Link href={props.HerfContact} passHref>
            <h5 className='duration-500 hover:text-gray-500'>Contact</h5>
          </Link>
        </div>
        <div className='flex   text-gray-200   gap-4 justify-end mx-8'>
          <div
            onClick={toggler}
            className='block active:bg-slate-600/30 duration-300 rounded-full p-2 lg:hidden absolute  right-7'>
            {" "}
            {burgerMenu ? (
              <svg
                version='1.1'
                id='Capa_1'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                x='0px'
                y='0px'
                width='22px'
                height='22px'
                viewBox='0 0 460.775 460.775'
                xmlSpace='preserve'>
                <path
                  style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "rgb(100%,100%,100%)",
                    fillOpacity: 1,
                  }}
                  d='M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
	c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
	c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
	c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
	l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
	c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z'
                />
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                viewBox='0 0 24 24'
                width='24px'
                height='24px'>
                <g id='surface38562724'>
                  <path
                    style={{
                      stroke: "none",
                      fillRule: "nonzero",
                      fill: "rgb(100%,100%,100%)",
                      fillOpacity: 1,
                    }}
                    d='M 1.5 3 L 1.5 4.5 L 21 4.5 L 21 3 Z M 1.5 10.5 L 1.5 12 L 21 12 L 21 10.5 Z M 1.5 18 L 1.5 19.5 L 21 19.5 L 21 18 Z M 1.5 18 '
                  />
                </g>
              </svg>
            )}
          </div>
          <div className='relative'>
            <div className=' '>
              <div className='lg:flex mt-1  gap-3 hidden '>
                {/*Trans*/}
                <div
                  onClick={() => {
                    setTransMenu(!transMenu);
                  }}
                  className='duration-500 hover:animate-pulse hover:ring-2  hover:opacity-60  rounded-full h-[25px] w-[25px] mt-1 active:scale-95  hover:text-gray-400'>
                  <svg
                    className={
                      transMenu
                        ? "animate-bounce  duration-700 animate-pulse"
                        : ""
                    }
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    width='22'
                    height='22'
                    viewBox='0 0 998.1 998.3'
                    xmlSpace='preserve'>
                    <path
                      fill='#DBDBDB'
                      d='M931.7 998.3c36.5 0 66.4-29.4 66.4-65.4V265.8c0-36-29.9-65.4-66.4-65.4H283.6l260.1 797.9h388z'
                    />
                    <path
                      fill='#DCDCDC'
                      d='M931.7 230.4c9.7 0 18.9 3.8 25.8 10.6 6.8 6.7 10.6 15.5 10.6 24.8v667.1c0 9.3-3.7 18.1-10.6 24.8-6.9 6.8-16.1 10.6-25.8 10.6H565.5L324.9 230.4h606.8m0-30H283.6l260.1 797.9h388c36.5 0 66.4-29.4 66.4-65.4V265.8c0-36-29.9-65.4-66.4-65.4z'
                    />
                    <polygon
                      fill='#4352B8'
                      points='482.3,809.8 543.7,998.3 714.4,809.8'
                    />
                    <path
                      fill='#607988'
                      d='M936.1 476.1V437H747.6v-63.2h-61.2V437H566.1v39.1h239.4c-12.8 45.1-41.1 87.7-68.7 120.8-48.9-57.9-49.1-76.7-49.1-76.7h-50.8s2.1 28.2 70.7 108.6c-22.3 22.8-39.2 36.3-39.2 36.3l15.6 48.8s23.6-20.3 53.1-51.6c29.6 32.1 67.8 70.7 117.2 116.7l32.1-32.1c-52.9-48-91.7-86.1-120.2-116.7 38.2-45.2 77-102.1 85.2-154.2H936v.1z'
                    />
                    <path
                      fill='#4285F4'
                      d='M66.4 0C29.9 0 0 29.9 0 66.5v677c0 36.5 29.9 66.4 66.4 66.4h648.1L454.4 0h-388z'
                    />
                    <linearGradient
                      id='a'
                      gradientUnits='userSpaceOnUse'
                      x1='534.3'
                      y1='433.2'
                      x2='998.1'
                      y2='433.2'>
                      <stop offset={0} stopColor='#fff' stopOpacity='.2' />
                      <stop offset={1} stopColor='#fff' stopOpacity='.02' />
                    </linearGradient>
                    <path
                      fill='url(#a)'
                      d='M534.3 200.4h397.4c36.5 0 66.4 29.4 66.4 65.4V666L534.3 200.4z'
                    />
                    <path
                      fill='#EEEEEE'
                      d='M371.4 430.6c-2.5 30.3-28.4 75.2-91.1 75.2-54.3 0-98.3-44.9-98.3-100.2s44-100.2 98.3-100.2c30.9 0 51.5 13.4 63.3 24.3l41.2-39.6c-27.1-25-62.4-40.6-104.5-40.6-86.1 0-156 69.9-156 156s69.9 156 156 156c90.2 0 149.8-63.3 149.8-152.6 0-12.8-1.6-22.2-3.7-31.8h-146v53.4l91 .1z'
                    />
                    <radialGradient
                      id='b'
                      cx='65.208'
                      cy='19.366'
                      r='1398.271'
                      gradientUnits='userSpaceOnUse'>
                      <stop offset={0} stopColor='#fff' stopOpacity='.1' />
                      <stop offset={1} stopColor='#fff' stopOpacity={0} />
                    </radialGradient>
                    <path
                      fill='url(#b)'
                      d='M931.7 200.4H518.8L454.4 0h-388C29.9 0 0 29.9 0 66.5v677c0 36.5 29.9 66.4 66.4 66.4h415.9l61.4 188.4h388c36.5 0 66.4-29.4 66.4-65.4V265.8c0-36-29.9-65.4-66.4-65.4z'
                    />
                  </svg>
                </div>
                <div className='duration-500 mt-1 active:scale-95  hover:text-gray-400'>
                  <Link href={props.herfTwitter} passHref>
                    <svg width='27' height='27' viewBox='0 0 24 24'>
                      <path
                        className='opacity-50 hover:opacity-30 duration-300'
                        fill='white'
                        d='M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z'></path>
                    </svg>
                  </Link>
                </div>

                <div className='duration-500 active:scale-95  hover:text-gray-400'>
                  {" "}
                  <Link href={props.herfFacebook} passHref>
                    <svg
                      fill='white'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 50 50'
                      width='25px'
                      height='25px'
                      className='opacity-50 mt-1 hover:opacity-30 duration-300'>
                      {" "}
                      <path d='M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z' />
                    </svg>
                  </Link>
                </div>
                <div className='duration-500 active:scale-95 hover:text-gray-400'>
                  {" "}
                  <Link href={props.herfInsta} passHref>
                    <svg
                      className='opacity-50 mt-1 hover:opacity-30 duration-300'
                      fill='white'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 30 30'
                      width='25px'
                      height='25px'>
                      {" "}
                      <path d='M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z' />
                    </svg>
                  </Link>
                </div>
                
                <button className=' hover:text-white box-decoration-slice shadow-md hover:shadow-red-500/40    focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 duration-300 focus:ring-offset-slate-800  font-bold h-8  px-6 rounded-lg w-full flex items-center text-gray-900 justify-center sm:w-auto bg-gray-200  hover:bg-red-400'>
                  <Link href={props.HerfDash} passHref>
                    <h4  className={`${locale=="ar"?"textStyleAr":""}${' m-auto font-bold text-gray-900 select-none  text-sm duration-300 hover:text-white'}`}>{props.HomeBtn} </h4>
                  </Link>

                </button>
              
              </div>
              {/*the Transition language list */}
              {transMenu ? (
                <div className=' mt-4 hidden lg:inline-block justify-start bg-gray-800/40 w-24 rounded-sm  py-1 h-18'>
                  <Link href={props.arUrl} passHref>
                    <div className=' flex px-2 pt-1 justify-around opacity-60 hover:opacity-100 select-none duration-500 cursor:pointer align-middle   bg-gray-700 mx-1  rounded-sm'>
                      <div>
                        <Image
                          src={props.imgFlagArabic}
                          width='18'
                          height='14'
                          alt='Arabic'
                        />
                      </div>
                      <h6 className="text-sm">العربية</h6>
                    </div>
                  </Link>
                  <div className='py-[2px]'></div>
                  <Link href={props.enUrl} passHref>
                    <div className='flex justify-around px-2 pt-1 opacity-60 hover:opacity-100 select-none duration-500 cursor:pointer align-middle  gap-1 bg-gray-700 mx-1  rounded-sm'>
                      <div>
                        <Image
                          className=''
                          src={props.imgFlagEnglish}
                          width='18'
                          height='14'
                          alt='English'
                        />
                      </div>
                      <h6 className="text-xs pt-[3px]">English</h6>
                    </div>
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div
        id='togglerDiv'
        className=' absolute TogglerDisplay lg:hidden uppercase h-screen lg:h-0 right-0 rounded-b-xl  max-w-[600px]  bg-gray-900  w-full'>
        <div className=' select-none mx-12  cursor-pointer  m-3 text-center lg:hidden'>
          <Link className='text-gray-300' href={props.HerfService} passHref>
            <div className='  hover:bg-gray-800/40 duration-300 py-2 text-xl font-semibold text-gray-300 rounded-xl'>
              Services
            </div>
          </Link>
        </div>
        <div className=' select-none mx-12 cursor-pointer  m-3 mb-5 text-center lg:hidden'>
          <Link className='text-gray-300' href={props.HerfContact} passHref>
            <div className='  hover:bg-gray-800/40 duration-300  py-2  text-xl font-semibold text-gray-300 rounded-xl'>
              Contact
            </div>
          </Link>
        </div>
        <div className=' select-none mx-12 cursor-pointer  m-3 text-center lg:hidden'>
          <Link className='text-gray-300' href={props.HerfDash} passHref>
            <div className='bg-gray-300 justify-center flex select-none  hover:bg-red-400 duration-300 pt-1 text-xl font-semibold text-gray-900 rounded-xl'>
              <span className="select-none ">Go Home</span>

            </div>
          </Link>
        </div>
        <div className=' select-none justify-content justify-center   grid grid-cols-2 gap-2 mx-12 cursor-pointer  m-3 text-center lg:hidden'>
          <Link className='text-gray-300' href={props.arUrl} passHref>
            <div className='flex  gap-1 justify-content pt-1 justify-center bg-gray-300  hover:bg-gray-400 duration-300  text-xl font-semibold text-gray-900 rounded-xl'>
              <div>
                <Image
                  className=''
                  src={props.imgFlagArabic}
                  width='18'
                  height='14'
                  alt='English'
                />
              </div>
              <h4>العربية</h4>
            </div>
          </Link>
          <Link className='text-gray-300' href={props.enUrl} passHref>
            <div className='flex gap-1 justify-content justify-center bg-gray-300  hover:bg-gray-400  duration-300 pt-1 text-xl font-semibold text-gray-900 rounded-xl'>
              <div>
                <Image
                  className=''
                  src={props.imgFlagEnglish}
                  width='18'
                  height='14'
                  alt='English'
                />
              </div>
              <h4>English</h4>
            </div>
          </Link>
        </div>
        <div className='lowercase duration-300 hover:bg-gray-700/30 ml-7 rounded-lg flex absolute opacity-60 bottom-24 justify-center text-xs font-thin mx-2'>
          <div
            className='m-1 col-span-3
           text-gray-400'>
            {" "}
            © Copyrights to
          </div>

          <div className='mt-1'>
            {" "}
            <Image
              className='  hover:opacity-50 pl-3 duration-700'
              src='/ico/1.png'
              alt='divzoon'
              height='15'
              width='60'
              loading='eager'
            />
          </div>
        </div>
      </div>


<hr className='hrcolor'/>

  
    </div>













    </header>

  </div>
  )
}

export default Layout

