import React, { useState,useEffect } from 'react'
import languages from '../../utils/language';
// import Image from 'next/image';
import LoadingDots from './LoadingDots';
import { toast } from 'react-hot-toast'
import { CopyOutlined} from '@ant-design/icons';
import {useSpeechSynthesis} from 'react-speech-kit'
function TextTranslate() {

 const { speak } = useSpeechSynthesis();
    const [loading, setLoading] = useState(false);
    const [language, setLanguage] = useState(languages[0].value);
    const [generatedTranslation, setGeneratedTranslation] = useState('')
    const [text, setText] = useState("")
    

    const currentModel = "text-davinci-003";

    const prompt = `Please translate the follwing text into ${language}. The translation should always be in the ${language} and should be gramatically correct.
     \n\n Original text:\n"${text}"\n\n Please provide your translation below:`

    const translateText = async () => {
        setGeneratedTranslation("");
        setLoading(true)
          
        const response = await fetch("api/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify({
                prompt,
                currentModel
            })
        });
    
        const data = await response.json()
        setGeneratedTranslation(data.data)
        // speak({text:generatedTranslation})
        setLoading(false)
    }

    
useEffect(() => {
    if (generatedTranslation !== "") {
      speak({ text: generatedTranslation });
    }
  }, [generatedTranslation]);

    const handleChange = (e) => {
        const selectedValue = e.target.value;
        const selectedLabel = languages.find(
            (language) => language.value === selectedValue
        )?.value;
        if (selectedLabel) {
            setLanguage(selectedLabel)
        }
    }


    return (
        <div>
            <div className=' w-full'>
            
            <div className='grid py-5 my-5 items-center ' >
                    {/* <Image src="./Bot.jpg" width={50} height={50} /> */}
                    <p className='text-left font-medium'>Choose your language</p>
               
                <select
                    className=' w-3/4 mt-2 border border-solid p-2 capitalize '
                    onChange={handleChange}
                    value={language}
                >
                    {languages.map((language, key) => {

                        return (
                            <>
                                <option key={key} value={language.value} >
                                    {language.label}
                                </option>
                            </>
                        )
                    })}
                </select>
                </div>
                <div className='flex  mt-10 items-center ' >
                    <p className='text-left font-medium'>Enter the text you want to translate</p>
                </div>
                <textarea className='block p-2.5 my-3 h-[90px] text-sm text-gray-800
               bg-sky-100 rounded-lg w-full'
                    placeholder='Write your text here..'
                    onChange={(e) => setText(e.target.value)}>
                </textarea>

                {!loading && (
                    <button className='bg-sky-600 rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-1/2' onClick={translateText}>
                        Translate
                    </button>
                )}
                {loading && (
                    <button disabled className='bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-1/2' >
                        <LoadingDots color='white' style="large" />
                    </button>
                )}


                {generatedTranslation && (
                    <>
                        <label className='block my-2 text-md text-left font-medium text-gray-900 dark:text-white'>
                            Translation:
                        </label>
                        <div onClick={() => {
                            navigator.clipboard.writeText(generatedTranslation)
                            toast("Translation copied to clipboard", {
                                icon: <CopyOutlined />,
                            });
                        }} className='p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer '>
                            <p>{generatedTranslation}</p>
                        </div>
                        <p className='my-1 text-sm text-gray-500 dark:text-gray-300'>Click on translation to copy on clipboard</p>
                        <div className='mb-[-80px]' />
                    </>
                )}


            </div>
        </div>
    )
}

export default TextTranslate