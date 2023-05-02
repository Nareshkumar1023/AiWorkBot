import Head from 'next/head'
import Layout from '../component/Layout'
import AnimatedText from '../component/AnimatedText'
import Link from 'next/link'
import HowItWorks from '../component/HowItWorks'
import Navbar from '../component/Navbar'
import Footer from '@/component/Footer'
import supabase from '@/config/supabase'
export default function Home() {
  return (
    <>
      <Head>
        <title>Ai Bot</title>
      </Head>
      <main>
      <Navbar/>
      <main className='flex  items-center text-dark w-full min-h-fit ' style={{ border: "1px solid transparent" }}>
        <Layout className='p-10 md:pt-16 sm:pt-8' >
          <div className=' flex items-center justify-between w-full lg:flex-col' style={{ border: "1px solid transparent" }}>
            <div className='w-1/2 md:w-full mb-4'>
              <img className="h-auto w-full lg:hidden md:inline-block md:w-full" src='/pic1.jpg'  style={{ border: "1px solid transparent" }}/>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center -mt-2 lg:w-full lg:text-center' style={{ border: "1px solid transparent" }}>
              <AnimatedText text="Are you exhausted from spending endless hours scouring for the ideal answer?." className='!text-5xl !text-left mx-3 xl:!text-4xl lf:!text-center lg:!text-6xl md:!text-4xl sm:!text-3xl ' />
              <p className='my-5 mx-3 text-base font-medium md:!text-sm sm:!text-xs'>
              Meet your new AI workplace assistant. Generate & Explain Formulas,Translation language, Office events, Email composer,Health care and Customer assistant with AI.
                 </p>
                 <div className='flex item-center self-start px-10 -mt-1 lg:self-center md:px-0'> 
                  <Link href="/login" className='flex items-center bg-blue text-light p-2.5 
                  px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-blue
                  border-2 border-solid border-transparent hover:border-blue
                  ' target={"_blank"}>Get Started</Link>
                
                 </div>
            </div>
          </div>
        </Layout>
    
      </main>
      
      <HowItWorks />
      <Footer/>
      </main>
    </>
  )
}
 