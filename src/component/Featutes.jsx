import React from 'react'
import { motion } from "framer-motion"


const Feature = ({ name, x, y }) => {

  return (
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-sky-700 text-light py-3 px-4 shadow-black cursor-pointer 
    absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-black xs:dark:text-light 
    xs:font-bold '
    
      whileHover={{ scale: 1.05 }}
      initial={{x:0,y:0}}
      whileInView={{x:x,y:y}}
      transition={{duration:1.5}}
      viewport={{once:true}}
    >
      {name}
    </motion.div>
  )
}

const Features = () => {
  return (
    <>
     <h2 className='font-bold mt-6 text-6xl w-full text-center md:text-5xl md:mt:5' >  Features  </h2>

<div className='px-20 pb-20   '>
     
      <div className='w-full h-screen  relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[50vh] xs:h-[40vh] 
      lg:bg-circularLightLg 
      md:bg-circularLightMd 
      sm:bg-circularLightSm' >
        <motion.div 
        className='flex items-center justify-center rounded-full font-semibold bg-sky-700 text-light 
         p-5 shadow-black cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2 '
          whileHover={{ scale: 1.05 }}
          
        >
          Ai Worplace Bot
        </motion.div>
        <Feature name="Tagline"  x="-30vw" y="-5vw" />
        <Feature name="Events" x="5vw" y="-16vw" />
        <Feature name="Translation Text" x="25vw" y="12vw" />
        <Feature name="Translation Audio" x="0vw" y="16vw" />
        <Feature name="Formulas" x="20vw" y="-10vw" />
        <Feature name="HealthCare" x="30vw" y="-5vw" />
        <Feature name="EmailComposer" x="-18vw" y="-14vw" />
        <Feature name="ChatBot" x="-25vw" y="10vw" />
       
     
    </div>
    </div>
    </>
  )
}

export default Features