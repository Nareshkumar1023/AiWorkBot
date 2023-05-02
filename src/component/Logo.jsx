import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const MotionLink = motion(Link);
const Logo=()=> {
  return (
    <div className='flex items-center justify-center ' >
        <MotionLink href='/' 
        className='w-17 h-14 flex items-center justify-center' 
        whileHover={{scale:0.9}} >
        <Image src='/ChatBotlogo.jpg' width='70' height='50'></Image>
        </MotionLink>
        
    </div>
  )
}

export default Logo