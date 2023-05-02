import React, { useState } from 'react'

function EmailGenerator() {
    const [description, setDescription] = useState("");

    // const [title, setTitle] = useState("");
    const [subject, setSubject] = useState("");
    const [keyWords, setKeywords] = useState("")
    const [tone, setTone] = useState("");
    const [numWords, setNumWords] = useState("")
    const [generating, setGenerating] = useState(false);
    const [isCopy, setCopy] = useState(false)

    const handleSumit = async (e) => {
        e.preventDefault();
        setGenerating(true);
        const res = await fetch("/api/mailGenerate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                subject,
                keyWords,
                tone,
                numWords,
            }),
        });
        setGenerating(false)
        const data = await res.json();
        setDescription(data.description)
        console.log(data.description)
    }
    const handleCpy = () => {
        navigator.clipboard.writeText(description);
        setCopy(true)
    }


    return (
        <div className=' w-full mt-10  px-4 sm:px-6 lg:px-8 ' >
            <div className='flex justify-between w-full ' >
                {/* <div> */}
                <form onSubmit={(e) => handleSumit(e)} className='w-1/2 p-5' >
                    {/* <div className='flex flex-col' style={{ border: "1px solid transparent" }}>
                        <label className='sr-only' htmlFor='Title'>Title</label>
                        <input type='text' name='Title' placeholder='Title' id='Title' value={title} onChange={(e) => setTitle(e.target.value)}
                            // required={} 
                            className='block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder:-gray-500 my-2 text-gray-900'
                        />
                    </div> */}
                    <div className='flex flex-col'>
                        <label className='sr-only' htmlFor='description'>Subject</label>
                        <input type='text' name='description' placeholder='Subject' id='Description' value={subject} onChange={(e) => setSubject(e.target.value)}
                            required
                            className='block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder:-gray-500 my-2 text-gray-900'
                        />
                    </div>
                    <div className=' flex flex-col'>
                        <label className='sr-only' htmlFor='keywords'>Keywords</label>
                        <textarea className='block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder:-gray-500 my-2 text-gray-900'
                            onChange={(e) => setKeywords(e.target.value)}
                            name='keywords' placeholder='keywords ex: 2days leave,marriage,wfh..etc' rows="3" id='Keywords' value={keyWords} />


                    </div>
                    <div className='flex flex-col'>
                        <label className='sr-only' htmlFor='tone'>Tone</label>
                        <select type='tone' name='tone' placeholder='tone' id='tone' value={tone} 
                        onChange={(e) => setTone(e.target.value)}
                            className='block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder:-gray-500 my-2 text-gray-900'
                        >
                            <option value="default">select leave(Optional)</option>
                            <option value="casual">Casual leave</option>
                            <option value="Sick">Sick leave</option>
                            <option value="Marriage">Marriage leave</option>

                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <label className='sr-only' htmlFor='words'>Words</label>
                        <input type='number' name='words' placeholder='No Of words' id='words' value={numWords} 
                        onChange={(e) => setNumWords(e.target.value)}
                        className='block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder:-gray-500 my-2 text-gray-900'
                        // required={}
                        />
                    </div>
                    <button
                        className='bg-sky-600  cursor-pointer w-full hover:bg-blue-700 text-white font-bold mt-6 py-2 px-4 rounded' type="submit"
                        disabled={generating || subject === ''}
                    >
                        {generating ? "Generating..." : "Generate Email Format"}

                    </button>
                </form>
                {/* </div> */}
                <div className='w-1/2' >

                    <label className='font-bold' htmlFor='output'>Output</label>
                    <textarea
                        name="output"
                        id="output"
                        rows={
                            description === '' ? 11 : description.split("\\n").length + 12
                            
                        }
                        readOnly
                        value={description}
                        disabled={description === ''}
                        placeholder='Ai Generator'
                        className='block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 placeholder-gray-500 my-2 text-gray-900'
                    />
                    <button onClick={()=>{handleCpy()}} className=' bg-sky-600 mt-3  hover:bg-sky-700 cursor-pointer text-white font-bold py-2 px-4 rounded'>
                        {isCopy ? "Copied" : "copy to Clipboard"}
                    </button>



                </div>
            </div>
        </div>
    )
}

export default EmailGenerator