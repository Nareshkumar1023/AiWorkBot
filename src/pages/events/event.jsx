import React from 'react'
import Head from 'next/head'
import LayoutSidebar from '../../component/sidebarData/Layout'
import EventGenerator from '../../component/event/events'
function office() {
    return (

        <LayoutSidebar>
            <Head>
                <title>Ai Bot | Events</title>
            </Head>
           
                <main className=' w-full  h-full overflow-x-hidden overflow-y-scroll' >
                <h1 className='text-4xl flex justify-center mt-5 md:text-6xl items-center  font-bold bg-gradient-to-r from-sky-400 via-blue-500 to-sky-800 bg-clip-text text-transparent'>
                Office Event Planner
                </h1>
                
                <EventGenerator/>
              
                </main>
         

        </LayoutSidebar>

    )
}

export default office