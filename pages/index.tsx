import Layout from '../components/Layout'
import { useRouter } from "next/router";
import Footer from '../components/Footer';
import { useCallback, useState, useEffect } from 'react';

const currentYear = new Date().getFullYear();
function index() {
  const router = useRouter();


  return (
  
    




      
      
   <div className=" box-content   overflow-hidden relative">
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
       <div className="">   <h1>About page: </h1> </div>
       <div className="h-[300px] bg-red-500 ">df</div>
        <div className="h-[300px] bg-red-500 ">df</div>
        <div className="h-[300px] bg-red-500 ">df</div>
        <div className="h-[300px] bg-red-500 ">df</div>
        <div className="h-[300px] bg-red-500 ">df</div>    <div className="h-[300px] bg-red-500 ">df</div>
        <div className="h-[300px] bg-red-500 ">df</div>
        <div className="h-[300px] bg-red-500 ">df</div>
        <div className="h-[300px] bg-red-500 ">df</div>
        <div className="h-[300px] bg-red-500 ">df</div>
 

        <Footer/>

   </div>
      
      



  )
}

export default index

