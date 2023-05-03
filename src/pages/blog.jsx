import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Layout from '../component/Layout'
import AnimatedText from '../component/AnimatedText'
import {  useInView, useMotionValue, useSpring } from 'framer-motion'
import Features  from '../component/Featutes'
import AllPosts from '@/component/AllPosts'
import Office from '../component/Office'
import Link from 'next/link'
import Navbar from '@/component/Navbar'
import Footer from '@/component/Footer'
import Logo from '@/component/Logo'

const AnimationNumbers=({value})=>{

  const ref = useRef(null)
  const motionValue= useMotionValue(0)
  const springValue= useSpring(motionValue,{duration:4000})
  const isInView = useInView(ref,{once:true});

  useEffect(()=>{
    if(isInView){
      motionValue.set(value)
    }
  },[isInView,value,motionValue])

  useEffect(()=>{
    springValue.on("change",(latest)=>{
      if(ref.current && latest.toFixed(0)<= value){
        ref.current.textContent = latest.toFixed(0)
      }
    })
  },[springValue,value])

  return <span ref={ref}></span>
}


function about() {
  return (
    <div>
      <Head>
        <title>Ai Bot | About Page</title>
      </Head>
{/* <Navbar/> */}
<Logo className=' w-96 flex m-3'/>


      <main className='flex w-full flex-col items-center justify-center ' >
        <Layout className='pt-16' >

    
          <AnimatedText text="Why I Want to Create the World's Most Accurate AI for Boring Software" className='mb-16  lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
          <div className='grid w-full grid-cols-8 gap-10 px-14 sm:gap-8 md:px-0 xs:p-0 sm:p-0' >
            <div className='col-span-3 flex flex-col items-start justify-start p-2 xl:col-span-4 md:order-2 md:col-span-8  xs:col-span-6' >
              <h2 className='mb-4 text-lg font-bold uppercase text-blue/75'>Biography</h2>
              <p className='font-medium'>
                Have you ever been stuck trying to find an answer to a mundane software question?
              </p>
              <p className='my-7  font-medium'>
                It can be incredibly time consuming to search through articles and videos to find the answer. Fortunately, advances in artificial intelligence (AI) are providing users with a solution that can help them save time and be more productive. In this blog, I will discuss why I want to create the world most accurate AI for everyday software questions,
                who this is designed for, the benefits of the AI model, and how it will be implemented.
              </p>
            </div>

            {/* image */}

            <div  className='col-span-3 relative h-max p-0 xl:col-span-4 md:order-1 md:col-span-8 xs:col-span-6' >
              <div className=' top-0 -right-3 -z-10 bg-light' >
                <img src="/ChatbotBlue.gif"  alt="" className='w-full h-96'   />
              </div>
              </div>
                 {/* number */}
              <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3' >
               <div className=' flex flex-col items-end justify-between xl:items-center ' > 
                  <span className='inline-block text-6xl font-bold md:text-5xl sm:text-4xl xs:text-2xl '>
                    <AnimationNumbers value={100}/>%
                  </span>
                  <h2 className='text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Speed</h2>
                </div>
                <div className=' flex flex-col items-end justify-between xl:item-center'>
                  <span className='inline-block text-6xl font-bold  md:text-5xl sm:text-4xl xs:text-2xl'>
                  <AnimationNumbers value={100}/>%
                  </span>
                  <h2 className='text-xl font-medium capitalize  text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Accuracy</h2>
                </div>
                {/* <div className='flex flex-col items-end justify-center'style={{border:'1px solid transparent'}}>
                  <span className='inline-block text-6xl font-bold'>
                  <AnimationNumbers value={100}/>%
                  </span>
                  <h2>Convenience</h2>
                </div> */}

                <div className=' flex flex-col items-end justify-between xl:item-center' >
                  <span className='inline-block text-6xl font-bold  md:text-5xl sm:text-4xl xs:text-2xl'>
                  <AnimationNumbers value={100}/>%
                  </span>
                  <h2 className='text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Personalization</h2>
                </div>
               
                </div>
          </div>

          <Features/>
          <AllPosts/>
          <Office/>
         
        </Layout>
        <Link href="/" className='w-54 h-full cursor-pointer  bg-blue text-light p-2 mt-2   hover:bg-light hover:text-blue
                  border-2 border-solid border-transparent hover:border-blue' 
        > 
        <p className='flex items-center justify-center'>&#10140; Back to the home </p>
        </Link>
        <Footer/>
      </main>
    </div>
  )
}

export default about