import { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import Layout from '../components/Layout'
import { useRouter } from 'next/router';
import en from '../translation/en'
import ar from "../translation/ar"
import '../styles/index.css'
import Head from 'next/head';






  




function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const {locale}=router;
    const trans= locale==="en"?en:ar;

// for the header functionality 









return (
    <div >
    <Head {...pageProps}>
      <title>{"DivDash | by Divzoon"}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Divzoon is a software company with talented Developers available for dedicated and fixed time/cost projects. Hire web developers and app developers from Divzoon who have proven expertise in trending technologies, and develop custom and responsive websites, apps, and eCommerce solutions."/>
        <meta name="description" content="Using modern technologies, we build with efficiency and skill, creating flexible and scalable business-driven solutions."/>
        <meta name="description" content="We deliver your project just in time We take an agile approach to both our work and our practice."/>
        <meta name="description" content="Our design approach is to simplify. We embrace the joy in creating something unique that is easy for end users."/>
        <meta name="description" content="We shape brands through exploration, applying in-depth research to challenge assumptions at every turn."/>
        <meta name="description" content="Our web developers create custom web application solutions we deliver web presence to help you grow your business using the best web technologies ."/>
        <meta name="description" content="Starting from concept, information architecture, visual identity and UI/UX design, our team delivers dazzling experiences for maximum user engagement."/>

      <link rel='icon' href='/ico/fig.png' />
    </Head>

<NextUIProvider>
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
title="DivDash | by Divzoon"> 
  <Component   {...pageProps }  />
  </Layout>
  </NextUIProvider>
  </div>
  )



  
}

export default MyApp;
