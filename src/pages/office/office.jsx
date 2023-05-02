import React from 'react'
import Head from 'next/head'
import LayoutSidebar from '../../component/sidebarData/Layout'
import EmailGenerator from '@/component/emailGenerator/EmailGenerator'
function office() {
    return (

        <LayoutSidebar>
            <Head>
                <title>Ai Bot | Office</title>
            </Head>
           
                <main className=' w-full  h-full overflow-hidden' >
                <h1 className='text-4xl flex justify-center mt-5 md:text-6xl items-center  font-bold bg-gradient-to-r from-sky-400 via-blue-500 to-sky-800 bg-clip-text text-transparent'>
                Email Generator
                </h1>
                
                <EmailGenerator/>
              
                </main>
         

        </LayoutSidebar>

    )
}

export default office