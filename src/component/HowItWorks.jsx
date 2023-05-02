import React from 'react'
import { motion } from "framer-motion"
// import AnimatedText from '../component/AnimatedText'
function benefits() {
  return (
    <div id="howitworks">
      <motion.p className='font-bold text-6xl mb-20 mt-32 w-full text-center lg:!text5xl md:!text-4xl'
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring" }}

      >
        How It Works
      </motion.p>
      <motion.main className='flex px-20 my-5 items-center text-dark w-full h-full lg:px-5' 
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        //  viewport={{once:true}}
        transition={{ duration: 1, type: "spring" }}
      >
        <div className=' flex items-center ml-8 justify-between w-full md:flex-col md:ml-0 sm:ml-0' >

          <div className='w-60 ' >
            <img className="h-fit w-screen" src='./Excel.png'  />
          </div>
          <div className=' w-3/5  text-base md:w-full  font-medium' >
            <p className='text-darkGreen text-2xl'>&#10171;  Lets use <b>Microsoft Excel</b> as example here</p><br />

            <p className='text-darkGreen text-2xl'>&#10171;  Generate Formula ,Explain Formula</p><br />
            <p className='text-darkGreen text-2xl'>&#10171;  How to perform certain actions </p><br />
            <p className='text-darkGreen text-2xl'>&#10171;  Input your question and Ai Bot will reply within a seconds.</p>

          </div>
        </div>

      </motion.main>


      <motion.p className='font-bold text-6xl mb-20 mt-32 w-full text-center lg:!text5xl md:!text-4xl'
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        Translate Text & Audio
      </motion.p>

      <motion.main className='flex px-30 items-center text-dark w-full h-full lg:px-5 ' 
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        //  viewport={{once:true}}
        transition={{ duration: 1, type: "spring" }}
      >

        <div className=' flex items-center  px-28 justify-between w-full md:flex-col md:px-0 sm:ml-0' >
          <div className='my-5 mx-3 text-base font-medium  '>
            <p className='text-blue text-2xl'>&#10171;  Lets use Translate Text as an example here, </p><br />
            <p className='text-blue text-2xl'>&#10171;  We can translate our text in multi-language, </p><br />
            <p className='text-blue text-2xl'>&#10171;  As well as, this bot have capable to upload an audio translate.  </p>
          </div>
          <div className='w-60 '>
            <img className="h-fit w-screen" src='/translate.png'  />
          </div>
        </div>
      </motion.main>

      <motion.p className='font-bold text-6xl mb-20 mt-32 w-full text-center lg:!text5xl md:!text-4xl'
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring" }}

      >
        Mail Composer
      </motion.p>
      <motion.main className='flex px-32 my-30 items-center text-dark w-full h-full lg:px-5 ' 
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        //  viewport={{once:true}}
        transition={{ duration: 1, type: "spring" }}
      >

        <div className=' flex items-center ml-8 mt-30 justify-between w-full md:flex-col md:ml-0 sm:ml-0' >

          <div className='w-96' >
            <img className="h-fit w-screen" src='./mail.gif' />
          </div>
          <div className='my-5 mx-3 text-base font-medium md:w-full '>
            <p className='text-darkGreen text-2xl'>&#10171; Lets use mail composer as example here , </p><br />

            <p className='text-darkGreen text-2xl'>&#10171;  It easy way to generate mail format , </p><br />
            <p className='text-darkGreen text-2xl'>&#10171;   Input your question and Ai Bot will reply within a seconds, </p>

          </div>
        </div>


      </motion.main>

      <motion.p className='font-bold text-6xl mb-20 mt-32 w-full text-center lg:!text5xl md:!text-4xl'
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring" }}

      >
        Health Care
      </motion.p>

      <motion.main className='flex px-30 items-center text-dark w-full h-full lg:px-5 ' 
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        //  viewport={{once:true}}
        transition={{ duration: 1, type: "spring" }}
      >

        <div className=' flex items-center  px-28 justify-between w-full md:flex-col md:px-0 sm:ml-0' >
          <div className='my-5 mx-3 text-base font-medium  '>
            <p className='text-darkGreen text-2xl'>&#10171;  Lets use Health Care here, </p><br />
            <p className='text-darkGreen text-2xl'>&#10171; It will provide the information for the symptoms, </p><br />
            <p className='text-darkGreen text-2xl'>&#10171;  Based on this requirements this Ai suggest you Doctors and Hospitals.  </p>
          </div>
          <div className='w-72 '>
            <img className="h-fit w-screen" src='/hCare.jpg' />
          </div>
        </div>
      </motion.main>

      <motion.p className='font-bold text-6xl mb-20 mt-32 w-full text-center lg:!text5xl md:!text-4xl'
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring" }}

      >
        Gifts Shopping with Ai
      </motion.p>
      <motion.main className='flex px-32 my-30 items-center text-dark w-full h-full lg:px-5 ' 
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        //  viewport={{once:true}}
        transition={{ duration: 1, type: "spring" }}
      >

        <div className=' flex items-center ml-8 mt-30 justify-between w-full md:flex-col md:ml-0 sm:ml-0' >

          <div className='w-96' >
            <img className="h-fit w-screen" src='./GiftBvlg.gif'  />
          </div>
          <div className='my-5 mx-3 text-base font-medium md:w-full '>
            <p className='text-darkGreen text-2xl'>&#10171; Lets use Ai for Gifts Ideas , </p><br />
            <p className='text-darkGreen text-2xl'>&#10171; It will provide based on your suggestions , </p><br />
            <p className='text-darkGreen text-2xl'>&#10171;  And then we filter the Price range,Gender And Age, </p>
          </div>
        </div>


      </motion.main>

      <motion.p className='font-bold text-6xl mb-20 mt-32 w-full text-center lg:!text5xl md:!text-4xl'
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring" }}

      >
        Chat Bot
      </motion.p>

      <motion.main className='flex px-30 items-center text-dark w-full h-full lg:px-5 ' style={{ border: "1px solid transparent" }}
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        //  viewport={{once:true}}
        transition={{ duration: 1, type: "spring" }}
      >

        <div className=' flex items-center  px-28 justify-between w-full md:flex-col md:px-0 sm:ml-0' >
          <div className='my-5 mx-3 text-base font-medium  '>
            <p className='text-darkGreen text-2xl'>&#10171;  Lets use Health Care here, </p><br />
            <p className='text-darkGreen text-2xl'>&#10171; It will provide the information for the symptoms, </p><br />
            <p className='text-darkGreen text-2xl'>&#10171;  Based on this requirements this Ai suggest you Doctors and Hospitals.  </p>
          </div>
          <div className='w-72 '>
            <img className="h-fit w-screen" src='/Cbot.gif'  />
          </div>
        </div>
      </motion.main>
    </div>
  )
}

export default benefits