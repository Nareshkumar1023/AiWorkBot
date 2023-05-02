import React, { useState } from 'react'
import LayoutSidebar from '../component/sidebarData/Layout'
import AudioTranslate from '@/component/LanguageLearning/AudioTranslate'
import TextTranslate from '@/component/LanguageLearning/TextTranslate'
import { Toaster } from 'react-hot-toast'
import Head from 'next/head'
function creative() {
  const [mode, setMode] = useState(true)
  return (
    <LayoutSidebar>
      <Head>
                        <title>Ai Bot | Creative</title>
                    </Head>
      <main className='flex flex-1 w-full flex-col item justify-center text-center px-5 py-2 mb-[100px] ' >

        <h1 className='sm:text-6xl text-4xl max-w-1xl py-2 font-bold text-sky-400' >Language Learning</h1>
        <p className='sm:text-xl w-full flex flex-col items-center  text-sky-400 ' >
          Welcome to my Ai Bot
        </p>
        <div className='flex flex-row justify-center items-center mt-5 mb-[-5px]' >
          <button onClick={() => setMode(!mode)} className={`px-4 py-2 font-semibold  ${mode ? "bg-sky-400 text-white" : "bg-gray-300 text-black"
            }`}>Translate Text</button>

          <button onClick={() => setMode(!mode)} className={`px-4 py-2 font-semibold  ${!mode ? "bg-sky-400 text-white" : "bg-gray-300 text-black"
            }`}>Translate Audio</button>
        </div>

        {mode? <TextTranslate/>:<AudioTranslate/>}
        <Toaster position='top-center' reverseOrder={false} toastOptions={{duration:2000}}/>


      </main>

    </LayoutSidebar>
  )
}

export default creative