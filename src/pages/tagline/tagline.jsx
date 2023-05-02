import React from 'react'
import Head from 'next/head'
import LayoutSidebar from '../../component/sidebarData/Layout'
import Tagline from '../../component/tagline/Tagline'
function office() {
    return (

        <LayoutSidebar>
            <Head>
                <title>Ai Bot | Tagline</title>
            </Head>

            <main className=' w-full  h-full overflow-hidden' >
                <h1 className='text-4xl flex justify-center mt-5 md:text-6xl items-center  font-bold bg-gradient-to-r from-sky-400 via-blue-500 to-sky-800 bg-clip-text text-transparent'>
                    Tagline
                </h1>

                <Tagline />

            </main>

        </LayoutSidebar>

    )
}

export default office