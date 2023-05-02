import React from 'react'
import Head from 'next/head'
import LayoutSidebar from '../../component/sidebarData/Layout'
import Vacation from '../../component/accessories/index'
function Health() {
    return (

        <LayoutSidebar>
            <Head>
                <title>Ai Bot | Accessories</title>
            </Head>

            <main className=' w-full  h-full overflow-scroll' >
                <h1 className='text-4xl flex justify-center mt-5 md:text-6xl items-center  font-bold bg-gradient-to-r from-sky-400 via-blue-500 to-sky-800 bg-clip-text text-transparent'>
                   Lets Shop with Ai
                </h1>

                <Vacation />
                

            </main>


        </LayoutSidebar>

    )
}

export default Health