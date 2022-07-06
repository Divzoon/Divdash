import Layout from '../components/Layout'
import { useRouter } from "next/router";
import Footer from '../components/Footer';
import { useCallback, useState, useEffect } from 'react';
import Sidebar from './../components/Sidebar';

const currentYear = new Date().getFullYear();
function index() {
  const router = useRouter();


  return (
  
    




      
      
   <div className=" box-content  min-h-screen overflow-hidden overflow-y-auto relative">
        <Layout  
         className='select-none '
        herfFacebook='https://www.facebook.com/divzoon'
        herfInsta='https://www.instagram.com/divzoon/'
        herfTwitter='https://twitter.com/divzoon'
        HerfDash='https://www.divzoon.com/'
        Herfabout='/about'
        HerfContact='/Contact'
        HerfService='/Services'
        herflogoLink={"/"}
        herflogo='/ico/1.png'
        imgFlagArabic='/Images/flags/Egypt.png'
        imgFlagEnglish='/Images/flags/Usa.png'
        enUrl={"/"}
        arUrl={"/ar"}
        title="DivDash | by Divzoon"/>
 <Sidebar/>

<div className='h-[300px] bg-gray-100'></div>
<div className='h-[300px] bg-gray-100'></div>
<div className='h-[300px] bg-gray-100'></div>
<div className='h-[300px] bg-gray-100'></div>
<div className='h-[300px] bg-gray-100'></div>

<div className=" bg-red-500 mt-28 w-full  absolute bottom-0">   <Footer />
</div>
     
   </div>
      
      



  )
}

export default index

