import React from 'react'
import Head from 'next/head'
import LayoutSidebar from '../../component/sidebarData/Layout'
import MedicalCare from '../../component/healthCare/healthCare'
function Health() {
    return (

        <LayoutSidebar>
            <Head>
                <title>Ai Bot | HealthCare</title>
            </Head>
           
                <main className=' w-full  h-full overflow-x-hidden overflow-y-scroll' >
                <h1 className='text-4xl flex justify-center mt-5 md:text-6xl items-center  font-bold bg-gradient-to-r from-sky-400 via-blue-500 to-sky-800 bg-clip-text text-transparent'>
              Health Care
                </h1>
                
                <MedicalCare/>
              
                </main>
         

        </LayoutSidebar>

    )
}

export default Health