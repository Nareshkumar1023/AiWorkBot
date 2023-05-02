import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import Lilcon from './Lilcon'
const Details = ({  info ,time,company,companyLink, place, type }) => {
    const ref= useRef(null)
    return (
        <li ref={ref}
            className='my-8  first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'
        //   style={{ border: '1px solid blue' }}
        >
         <Lilcon reference={ref} />
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5 ,type:"spring"}}
            >
                <h3 className='capitalize font-bold text-2xl' target="_blank"
                //  style={{ border: '1px solid black' }}
                >
                    {type} <a className='text-blue capitalize' href={companyLink}>@{company}
                    </a>
                </h3>
                <span
                    className='capitalize font-medium text-lightBlack'
                // style={{ border: '1px solid yellow' }}
                >
                    {place} | {time}
                </span>
                <p
                    className='font-medium w-full'
                >
                    {info}
                </p>
            </motion.div>
        </li>
    )
}

function Office() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className='my-24 ' >
            <motion.h2 className='font-bold text-8xl mb-20 w-full text-center'  
            initial={{y:50}}
            whileInView={{y:0}}
            viewport={{once:true}}
            transition={{duration:0.5 ,type:"spring"}}>
                Creative Essentials
            </motion.h2>
     
            <div ref={ref} className='w-[75%] mx-auto relative' style={{ border: '1px solid transparent' }}>
                {/* vertical line */}

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute ml-32 left-16 top-0 w-[4px] h-screen bg-black origin-top'
                />

                {/* content */}
                <ul className='w-full ml-32 flex flex-col items-start justify-between ' >
                    <Details
                        type="Health Care" company="Read more"
                        // companyLink="/blog"
                        address="AI Workplace Bot and Medicare"
                        time="January 17th"
                        info="Perfect Solution for People Struck Trying to Figure Out medical Problems."

                    />
                    <Details
                        type="Shopping" company="Read more"
                        // companyLink="/blog"
                        place="AI Workplace Bot and Shopping"
                        time="January 17th"
                        info="Perfect Solution for People Struck Trying to Figure Out gift accessories!"

                    />
                    <Details
                        type="Customer Assistant" company="Read more"
                        // companyLink="/blog"
                        place="AI Workplace Bot and ChatBot"
                        time="January 17th"
                        info="Perfect Solution for People Struck Trying to Figure Out customer needs."

                    />
                     <Details
                        type="Translation" company="Read more"
                        // companyLink="/blog"
                        place="AI Workplace Bot and Events"
                        time="January 17th"
                        info="Perfect Solution for People Struck Trying to Figure Out other languages needs."

                    />
                    

                </ul>

            </div>
        </div>
    )
}

export default Office