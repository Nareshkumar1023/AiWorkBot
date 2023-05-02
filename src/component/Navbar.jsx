import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { TwitterOutlined, GithubFilled, LinkedinFilled, YoutubeFilled } from '@ant-design/icons';
import { motion } from 'framer-motion'

// const MotionLink = motion(Link);
const CustomLink = ({ href, title, className, target }) => {

    const router = useRouter()
    return (
        <Link href={href} target={target} className={`${className} relative group`}>
            {title}
            <span className={`
            h-[2px]  inline-block  bg-blue absolute left-0 -bottom-1
            group-hover:w-full transition-[width] ease duration-300 
            ${router.asPath === href ? 'w-full' : 'w-0'} `}

            >
            </span>

        </Link>

    )
}

//Mobile responsive
const CustomMobileLink = ({ href, title, className, toggle }) => {

    const router = useRouter()
const handleClick=()=>{
    toggle();
    router.push(href)
}

    return (
        <button href={href} onClick={handleClick} className={`${className} relative group my-2 text-light dark:text-black`}>
            {title}
            <span className={`
            h-[2px]  inline-block  bg-light absolute left-0 -bottom-1 
            group-hover:w-full transition-[width] ease duration-300 
            ${router.asPath === href ? 'w-full' : 'w-0'} `}

            >
            </span>

        </button>

    )
}

function Navbar() {
// const[mode, setMode]= useThemeSwitcher();
const[isOpen,setIsOpen]= useState(false);
const handleClick=()=>{
    setIsOpen(!isOpen)
}
    return (
        <header className='w-full px-32 py-5 font-medium flex items-center justify-between relative'>
          
            <button className=' flex-col justify-center items-center hidden lg:flex ' onClick={handleClick}   >
                <span className={`bg-black dark:bg-light block transition-all duration-100 ease-out  h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1':'-translate-y-0.5'}`}></span>
                <span className={`bg-black dark:bg-light block transition-all duration-100 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0':'opacity-100'}`}></span>
                <span className={`bg-black dark:bg-light block transition-all duration-100 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1':'translate-y-0.5'}`}></span>
            </button>
        
            <Logo />
    
      
           <div className='w-full ml-36 flex justify-around items-center  lg:hidden' >
           <nav >
                <CustomLink href='/' title="Home" className='mr-4' />
                <CustomLink href='/blog' title="Blog" className='mx-4' />
                <CustomLink href='#howitworks' title="How it Works" className='mx-4' />
                <CustomLink href='/pricing' title="Pricing" className='mx-4' />
                <CustomLink href='/login' title="LogIn" className='ml-4' />
            </nav>
            <nav className='flex items-center justify-center flex-wrap'>
                <motion.a href='https://twitter.com' target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mr-3' >
                    <TwitterOutlined style={{ color: "#4E89FF", fontSize: '20px' }} />
                </motion.a>
                <motion.a href='https://github.com' target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3' >
                    <GithubFilled style={{ color: "black", fontSize: '20px' }} />
                </motion.a>
                <motion.a href='https://linkedin.com' target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3' >
                    <LinkedinFilled style={{ color: "#0a66c2", fontSize: '20px' }} />
                </motion.a>
                <motion.a href='https://instagram.com' target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 ml-3' >
                    <YoutubeFilled style={{ color: "#ff0000", fontSize: '20px' }} />
                </motion.a>
            </nav>
           </div>

{/* menu onClick responsive */}

          {
            isOpen ?
            <motion.div 
            initial={{scale:0, opacity:0, x:"-50%",y:"-50%"}}
            animate={{scale:1, opacity:1}}
            className='min-w-[70vw] flex flex-col z-30 items-center justify-between fixed top-1/2 left-1/2
            bg-black/70  rounded-lg backdrop-blur-md py-32 -translate-x-1/2 -translate-y-1/2'  >
          <nav className='flex items-center flex-col justify-center'>
               <CustomMobileLink href='/' title="Home" className=''toggle={handleClick} />
               <CustomMobileLink href='/blog' title="Blog" className='' toggle={handleClick}/>
               <CustomMobileLink href='#howitworks' title="How it Works" className=''toggle={handleClick} />
               <CustomMobileLink href='/pricing' title="Pricing" className='' toggle={handleClick} />
               <CustomMobileLink href='/login' title="LogIn" className='' toggle={handleClick} />
           </nav>
           <nav className='flex items-center justify-center flex-wrap mt-3'>
               <motion.a href='https://twitter.com' target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-7 mr-3 sm:mx-1 bg-light rounded-full' >
                   <TwitterOutlined style={{ color: "#4E89FF", fontSize: '20px' ,padding:'5px'}} />
               </motion.a>
               <motion.a href='https://github.com' target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-7 mx-3 sm:mx-1 bg-light rounded-full' >
                   <GithubFilled style={{ color: "black", fontSize: '18px' ,padding:'5px'}} />
               </motion.a>
               <motion.a href='https://linkedin.com' target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-7 mx-3 sm:mx-1 bg-light rounded-full' >
                   <LinkedinFilled style={{ color: "#0a66c2", fontSize: '18px' ,padding:'5px'}} />
               </motion.a>
               <motion.a href='https://instagram.com' target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-7 ml-3 sm:mx-1 bg-light rounded-full' >
                   <YoutubeFilled style={{ color: "#ff0000", fontSize: '20px',padding:'4px' }} />
               </motion.a>
           </nav>
          </motion.div>

            : null
          }

            
        </header>
    )
}

export default Navbar