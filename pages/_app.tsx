import React, { useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import Footer from '../components/Footer';
import { NextUIProvider } from '@nextui-org/react';

import '../styles/index.css'
import Head from 'next/head';
import { useRouter } from "next/router";


function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    const currentYear = new Date().getFullYear();

 let switcherCounter:number=0;
  useEffect(() => {
  


  var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
  var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
  
  // Change the icons inside the button based on previous settings
  if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      themeToggleLightIcon.classList.remove('hidden');
  } else {
      themeToggleDarkIcon.classList.remove('hidden');
  }
  
  var themeToggleBtn = document.getElementById('theme-toggle');
  
  themeToggleBtn.addEventListener('click', function() {
  
      // toggle icons inside button
      themeToggleDarkIcon.classList.toggle('hidden');
      themeToggleLightIcon.classList.toggle('hidden');
  
      // if set via local storage previously
      if (localStorage.getItem('color-theme')) {
          if (localStorage.getItem('color-theme') === 'light') {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
          } else {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
          }
  
      // if NOT set via local storage previously
      } else {
          if (document.documentElement.classList.contains('dark')) {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
          } else {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
          }
      }
      
  });
},[switcherCounter])


useEffect(() => {
  if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark')
}
},[switcherCounter])
 



// for the header functionality 









return (
    <div >
    <Head>
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
<div className="fixed h-12 z-50 w-full dark:bg-[#080a0e] bg-[#0d151d] ">
   <button aria-label="Theme switcher" onClick={() => {
    switcherCounter = switcherCounter+1;
   }} id="theme-toggle" type="button" className="   text-gray-500 dark:text-gray-400 hover:bg-gray-600/20 dark:hover:bg-gray-900 focus:outline-none focus:ring-0  rounded-full m-1 duration-300 text-sm p-2.5">
    <svg id="theme-toggle-dark-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
    <svg id="theme-toggle-light-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
</button>
</div>
<NextUIProvider>
  <Component   {...pageProps} />
  </NextUIProvider>
  </div>
  )



  
}

export default MyApp;