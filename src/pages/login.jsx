import React from 'react'
import { motion } from "framer-motion"
import { FaFacebookF, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import Logo from '../component/Logo'
import { MdLockOutline } from 'react-icons/md'
function login() {
  return (
    <div>
      {/* <div className='w-96 flex m-3' >
      <Logo />
      </div> */}
      <main className='flex overflow-hidden flex-col items-center justify-center w-full h-screen flex-1  text-center'>
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl -mt-12" >
          <div className='w-3/5 p-5'>
            <div className='text-left font-bold'>
              <span className='text-sky-500'>Ai</span> Bot
            </div>
            <div className='py-10'>
              <h2 className="text-3xl text-sky-600 mb-2 font-bold">Sign in to Account</h2>
              <div className='border-2 w-10 border-sky-500 inline-block mb-2'></div>
              <div className='flex justify-center my-2'>
                <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                  <FaFacebookF className="text-sm text-blue" />

                </a>
                <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                  <FcGoogle className="text-sm" />

                </a>
                <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                  <FaLinkedinIn className="text-sm text-sky-800" />
                </a>
              </div>
              <div className='flex flex-col items-center'>
                <div className='bg-gray-100 w-64 p-2 flex items-center mt-2 mb-3'>
                  <FaRegEnvelope className='text-gray-400 m-2' />
                  <input type="email" name='email' placeholder='Email'
                   className='bg-gray-100 outline-none text-sm flex-1' />
                </div>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                  <MdLockOutline className='text-gray-400 m-2' />
                  <input type="password" name='Password' placeholder='Password'
                   className='bg-gray-100 outline-none text-sm flex-1' />
                </div>
                <div className='flex justify-between w-64 mb-5'>
                  <label className='flex items-center text-xs' >
                    <input type="checkbox" name="remember"className='mr-2' />Remember me
                  </label>
                  <a href='/' className='text-xs'>Forgot Password ?</a>
                </div>
                <a href="/formulas/formulas" className='border-2 border-sky-600 text-sky-600 rounded-full px-12 py-2 inline-block font-semibold
                hover:bg-sky-600 hover:text-white cursor-pointer
                '>SignIn</a>
              </div>
            </div>
          </div>

          <div className='w-80  bg-sky-600 text-white rounded-tr-2xl rounded-br-2xl py-12 px-12'>
            <h2 className='text-3xl font-bold mb-2'> Lets,talk</h2>
            <div className='border-2 w-10 border-white inline-block mb-2'></div>
            <motion.img className='mb-5' src='./Bot.jpg'
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{
                ease: "linear",
                duration: 1,
                x: { duration: 1 }
              }}
            //  transition={{ damping: 7, duration:0.5, type: "spring" }}
            />

            <a href='#' className='border-2 mt-6 border-white rounded-full px-12 py-2 inline-block
             hover:bg-white hover:text-sky-600
           border-solid border-transparent hover:border-sky-400 font-semibold
            '>SignUp</a>


          </div>
        </div>
      </main>
    </div>
  )
}

export default login