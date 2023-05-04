import { SidebarData, ProfileData } from './Data'
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Logo from '../Logo';

const Sidebar = () => {
    const router = useRouter();
    return (
        <div className=" bg-sky-600">
            <div className="flex flex-col" >
                <div className='w-full px-4 py-0 h-auto flex items-center ' >
                    {/* <div className='' style={{ border: '1px solid transparent' }}> */}
                        <div className=' w-9 rounded-full'>
                            <Logo />
                        </div>
                    {/* </div> */}
                    <div className='text-light ml-2 font-semi-bold' >
                        Ai Workplace Bot
                    </div>
                </div>
                <div className='mt-4' >

                    <h2 className='text-light font-bold px-2'>SOFTWARE APPLICATION</h2>
                    {SidebarData.map((val, key) => {

                        return (
                            <div key={key} >
                                <Link href={val.link} className={router.pathname == "/" ? "active" : ""}>
                                    <div key={key} className='p-1 mt-4 transition ease-in-out delay-150 flex items-center font-medium cursor-pointer rounded-xl
                                    hover:-translate-y-1 hover:scale-80 duration-300 
                                    hover:bg-sky-900 hover:text-black ' >
                                        <div className='ml-2 h-full' >
                                            <p className='p-1 text-light '>{val.icon}</p>
                                        </div>
                                        <h1 className='text-light ml-2 '>{val.text}</h1>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
                <div className='h-23 mt-10 font-medium' >
                    {ProfileData.map((value, key) => {
                        return (
                            <>
                                <Link href={value.link}>
                                    <div key={key} className='p-2 flex items-center transition ease-in-out delay-150 cursor-pointer rounded-xl       hover:-translate-y-1 hover:scale-80 duration-300  hover:bg-sky-900 hover:text-black' >
                                        <div className='ml-2 h-full' >
                                            <p className='p-1 text-light '>{value.icon}</p>
                                        </div>
                                        <h1 className='text-light ml-2'>{value.text}</h1>
                                    </div>
                                </Link>
                            </>
                        )
                    })}

                </div>
            </div>


        </div>
    );
};

export default Sidebar;