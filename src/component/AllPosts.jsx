import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import Lilcon from './Lilcon'
const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null)
    return (
        <li ref={ref}
            className='my-8  first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'
            
        >
            <Lilcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                viewport={{once:true}}
                transition={{ duration: 0.5, type: "spring" }}              >
                <h3 className='capitalize font-bold text-2xl' target="_blank"
                //  style={{ border: '1px solid black' }}
                >
                    {position} <a className='text-blue capitalize' href={companyLink}>@{company}
                    </a>
                </h3>
                <span
                    className='capitalize font-medium text-lightBlack'
                // style={{ border: '1px solid yellow' }}
                >
                    {address} | {time}
                </span>
                <p
                    className='font-medium w-full'
                >
                    {work}
                </p>
            </motion.div>
        </li>
    )
}

function AllPosts() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className='my-6 ' >
            <motion.h2 className='font-bold text-8xl mb-20 w-full text-center'
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                viewport={{once:true}}
                transition={{ duration: 0.5, type: "spring" }}
            >
                Formulas
            </motion.h2>

            <div ref={ref} className='w-[75%] mx-auto relative' >
                {/* vertical line */}

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute ml-32 left-16 top-0 w-[4px] h-full bg-black origin-top'
                />

                {/* content */}
                <ul className='w-full ml-32 flex flex-col items-start justify-between ' >
                    <Details
                        position="Microsoft Excel" company="Read more"
                        companyLink="/blog"
                        address="AI Workplace Bot and Excel"
                        time="January 17th"
                        work="Perfect Solution for People Struck Trying to Figure Out Excel Formulas"

                    />
                    <Details
                        position="Office Events Plans" company="Read more"
                        companyLink="/blog"
                        address="AI Workplace Bot and Google Sheet"
                        time="January 17th"
                        work="Introduction & Events.This saves you time and allows you to focus on more important tasks."

                    />
                    <Details
                        position="Email Composer" company="Read more"
                        companyLink="/blog"
                        address="AI Workplace Bot and AirTable"
                        time="January 17th"
                        work="Overview of what you can do with AI & Email composer with the help of AI Workplace Bot"

                    />

                </ul>

            </div>
        </div>
    )
}

export default AllPosts