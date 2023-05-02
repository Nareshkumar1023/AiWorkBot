import Layout from '../component/sidebarData/Layout'
// import Sidebar from '@/component/sidebarData/Sidebar'
import React from 'react'

function dashboard() {
  return (
    <div>
      
      <Layout/>
    </div>
  )
}

export default dashboard








// import React from 'react'
// import Head from 'next/head'
// import { SidebarData, ProfileData } from '../component/sidebarData/Data'
// import Logo from '@/component/Logo'
// import Formulas from '../component/dasboardModule/Formulas'
// import Link from 'next/link';

// // import {useRouter} from 'next/router'
// function dashboard() {
// // const router= useRouter()
// // const dashboardId= router.query.dashboardId
   
//     return (
//         <>
//             <Head>
//                 <title>Dasboard | Formula</title>
//             </Head>
//             <div className='w-full h-screen flex  justify-between' style={{ border: "1px solid transparent" }}>
//                 <div className='bg-sky-600  w-1/5 h-auto py-0 ' style={{ border: '2px solid transparent' }}>
//                     <div className='w-full px-4 py-0 h-auto flex items-center ' style={{ border: '1px solid transparent' }}>
//                         <div className='' style={{ border: '1px solid transparent' }}>
//                             <div className=' w-9   rounded-full'>
//                                 <Logo />
//                             </div>
//                         </div>
//                         <div className='text-light ml-2 font-semi-bold' style={{ border: '2px solid transparent' }}>
//                             Ai Office Bot
//                         </div>
//                     </div>
//                     <div className='mt-4' style={{ border: '2px solid transparent' }}>

//                         <h2 className='text-light font-bold px-2'>SOFTWARE APPLICATION</h2>

//                         {SidebarData.map((val, key) => {
//                             // console.log(val)
//                             return (
//                                 <>
                                //    <Link href={val.link} >
                                //     <div key={key} className='p-2 mt-4 flex items-center font-medium cursor-pointer rounded-xl hover:bg-zinc-900 hover:text-light' style={{ border: '1px solid transparent' }}>
                                //         <div className='ml-2 h-full' style={{ border: '1px solid transparent' }}>
                                //             <p className='p-1 hover:text-white'>{val.icon}</p>
                                //         </div>
                                     
                                //             <h1 className='text-white ml-2 '>{val.text}</h1>
                                   

                                //     </div>
                                //     </Link>
//                                 </>
//                             )
//                         })}

//                     </div>
                //     <div className='h-23 mt-24 font-medium' style={{ border: '1px solid transparent' }}>
                //         {ProfileData.map((value, key) => {
                //             return (
                //                 <>
                //                 <Link href={value.link}>
                //                 <div key={key} className='p-2 flex items-center cursor-pointer rounded-xl  hover:bg-zinc-900 hover:text-light active:bg-zinc-700' style={{ border: '1px solid transparent' }}>
                //                     <div className='ml-2 h-full' style={{ border: '1px solid transparent' }}>
                //                         <p className='p-1'>{value.icon}</p>
                //                     </div>
                //                     <h1 className='text-white ml-2'>{value.text}</h1>
                //                 </div>
                //                 </Link>
                //                 </>
                //             )
                //         })}

                //     </div>
                // </div>
//                 <div className='bg-lime-50  overflow-x-hidden h-auto overflow-y-scroll scrollbar-thin scrollbar-thumb-sky-100 scrollbar-track-sky-50' style={
//                     { border: "1px solid transparent", width: "80%" }
//                 }>
//                     <Formulas />
//                     {/* {dashboardId} */}

//                 </div>
//             </div>
//         </>
//     )
// }

// export default dashboard