import React from 'react'
import Head from 'next/head'
import LayoutSidebar from '../component/sidebarData/Layout'
import ChatBot from '../component/chatBot/chatBot'
function office() {
    return (

        <LayoutSidebar>
            <Head>
                <title>Ai Bot | Chat</title>
            </Head>

            <main className=' w-full  h-full overflow-y-scroll' >
                <h1 className='text-4xl flex justify-center mt-5 md:text-6xl items-center  font-bold bg-gradient-to-r from-sky-400 via-blue-500 to-sky-800 bg-clip-text text-transparent'>
                    Customer Assistant
                </h1>
                <ChatBot />
            </main>


        </LayoutSidebar>

    )
}

export default office