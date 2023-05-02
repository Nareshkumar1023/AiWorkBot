// import Footer from '@/component/Footer'
// import Navbar from '../component/Navbar'
import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import React, { useState } from 'react'
// import Loader from '@/component/loader/Loader'
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${montserrat.variable} font-mont `}>
        {/* <Navbar/> */}
       {/* <Loader /> */}
        <Component {...pageProps}  />
        {/* <Footer/> */}
      </main>

    </>

  )

}