import React, { useState } from 'react'
import axios from 'axios';
// import TypingAnimation from '../component/TypingAnimation'
import LayoutSidebar from '../../component/sidebarData/Layout';
import Head from 'next/head'
import LoadingDots from '@/component/LanguageLearning/LoadingDots';
function formulas() {
    const [inputValue, setInputValue] = useState('')
    const [chatLog, setChatLog] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    
    const [formData, setFormData] = useState({
        selectOption: '',
    });
    const [errors, setErrors] = useState({});
    const validateForm = () => {
        const newErrors = {};

        if (!formData.selectOption) {
            newErrors.selectOption = 'Please select an option';
        }

        return newErrors;
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = validateForm();

        if (Object.keys(newErrors).length === 0) {
            setChatLog((prevChatLog) => [...prevChatLog, {
                type: 'user',
                message: inputValue
            }])
            sentMessage(inputValue)
            setInputValue('')
        } else {
            // form is invalid, update errors
            setErrors(newErrors);
        }
    }

    const sentMessage = (message) => {
        const url = 'https://api.openai.com/v1/chat/completions';
        const headers = {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_CHATGPT_API_KEY}`
        };
        const data = {
            model: "gpt-3.5-turbo-0301",
            messages: [{ "role": "user", "content": message }]
        }
        setIsLoading(true);
        axios.post(url, data, { headers: headers }).then((response) => {
            console.log(response);
            setChatLog((prevChatLog) =>
                [...prevChatLog, {
                    type: "bot",
                    message: response.data.choices[0].message.content
                }])
            setIsLoading(false);
        }).catch((error) => {
            setIsLoading(false);
            console.log(error);
        })
    }

    const data = ["Microsoft Excel", "Google Sheets","Others"]

    return (

        <LayoutSidebar>
            <form className='m-3 p-3' onSubmit={handleSubmit}>
                <Head>
                    <title>Ai Bot | Formulas</title>
                </Head>
                <div className='w-full  h-full overflow-hidden' >
                    <h1 className='text-black font-bold text-4xl'>Formulas</h1>
                    <div className='w-full grid  h-auto ' >
                     
                        <main className='  w-2/4 mt-3  ' >
                            <div className='m-2  flex capitalize flex-col  ' >
                                <label className='text-zinc-500'>Excel ~ Google Sheets </label>
                                <div className='p-3 font-medium'>

                                    <select onChange={(event) =>
                                        setFormData({ ...formData, selectOption: event.target.value })
                                    } className='w-full border border-solid p-2 capitalize' type='text' name='Select' id="data">
                                        {data.map((op, key) =>
                                            <>
                                                <option key={key} value="none" selected disabled hidden>Select an Option</option>
                                                <option>{op}</option>
                                            </>

                                        )}
                                    </select>
                                    {errors.selectOption && <span className='text-red-500'>{errors.selectOption}</span>}
                                </div>

                            </div>
                            <div className='m-2   flex flex-col ' >
                                <label className='text-zinc-500'>Generate ~ Explain ~ How To </label>
                                <div className='p-3'>

                                    <textarea value={inputValue} onBlur={validateForm} onChange={(e) => setInputValue(e.target.value)} className='w-full border font-medium border-solid p-2 ' type='text' placeholder='Explain Formula' />
                                </div>

                            </div>
                            {/* <div className='m-2  flex flex-col' style={{ border: "1px solid transparent" }}>
                            <label className='text-zinc-500'>Topic: </label>
                            <p className='text-1xl'> Please be as specific as possible.
                            Rephrase your question if you receive an incorrect response.</p>
                            <div className='p-3'>

                                <textarea readOnly className='w-full border border-solid p-2 capitalize' type='text' placeholder='Microsoft Excel' />
                            </div>

                        </div> */}
                            <div className='m-2  flex items-center flex-col'>
                                <button className='w-3/4  bg-sky-500 text-light font-bold border border-solid p-2 capitalize'>Go</button>
                            </div>


                        </main>
                       
                        <div className='w-full mt-12 font-bold' >
                            <label className='text-zinc-500 ' >Output: </label>
                            <div className='p-3 mt-2 w-full  overflow-x-hidden h-auto overflow-y-scroll scrollbar-thin scrollbar-thumb-sky-100 scrollbar-track-white-500 font-medium ' style={{ border: "1px solid transparent" }}>
                                {chatLog.map((chat, index) => (
                                    <div key={index} className={` ${chat.message.type === 'user' ? 'bg-zinc-50' : ''} ${chat.type === 'bot' ? 'bg-zinc-200' : ''} rounded-lg p-4 my-2  text-sky-900 w-full`} style={{ border: '1px solid gray' }} >
                                        <div>
                                            {/* {chat.type === 'bot' &&  */}
                                            {/* <> */}
                                            <div>
                                                {chat.message.split('\n').map((paragraph, index) => (
                                                    <p key={index}>{paragraph}</p>
                                                ))}
                                            </div>
                                            {/* </> */}
                                            {/* } */}
                                        </div>

                                    </div>
                                ))}
                                {
                                    isLoading &&
                                    <div key={chatLog.length} className='flex justify-start'>
                                        <div className=' rounded-lg m-2 p-2 text-white w-22'>
                                            {/* <LoadingDots color='white' style="large" /> */}
                                            <img className='bg-white' src='/ld.gif'/>
                                        </div>
                                    </div>
                                }


                            </div>

                        </div>
                    </div>


                </div>


            </form>
        </LayoutSidebar>
    )
}

export default formulas