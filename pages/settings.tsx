import React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Footer';
import Sidebar from './../components/Sidebar';
import { useRouter } from 'next/router';
import en from '../translation/en'
import ar from "../translation/ar"


function settings() {
    const currentYear = new Date().getFullYear();
const router = useRouter();
const {locale}=router;
const trans= locale==="en"?en:ar;

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
    enUrl={"/en"}
    arUrl={"/ar"}
HomeBtn={trans.HomeBtn}
title="DivDash | by Divzoon"/>
<Sidebar Home={trans.SideNavHomeText}
Projects={trans.SideNavProjectsText}
Messages={trans.SideNavMessagesText}
Settings={trans.SideNavSettingsText}
help={trans.SideNavHelpText}
/>

<div className='h-[300px] mt-12 dark:bg-black bg-gray-100'>
test
{trans.HomeBtn}
</div>


<div className=" bg-red-500 mt-28 w-full  absolute bottom-0">   <Footer footerTrans={locale}/>
</div>
 
</div>
  
  


  )
}

export default settings