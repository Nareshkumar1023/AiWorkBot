import React, { useState,useEffect } from 'react'
import languages from '../../utils/language';
// import Image from 'next/image';
import LoadingDots from './LoadingDots';
import { toast } from 'react-hot-toast'
import {useSpeechSynthesis} from 'react-speech-kit'
import { CopyOutlined } from '@ant-design/icons';
const AudioTranslate = () => {
    const [loading, setLoading] = useState(false);
    const [language, setLanguage] = useState(languages[0].value);
    const [generatedTranslation, setGeneratedTranslation] = useState('')
    const [selectedFile, setSelectedFile] = useState(undefined)
    const { speak } = useSpeechSynthesis();
    const url = "https://api.openai.com/v1/audio/transcriptions";
    const transcribe = async () => {
        const formData = new FormData();
        if (selectedFile) {
            formData.append('file', selectedFile)
        }
        formData.append("model", "whisper-1");
        formData.append("response_format", "verbose_json");
        if (language) {
            formData.append("language", language);
        }

        const headers = {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_CHATGPT_API_KEY}`,

        }
        return fetch(url, {
            method: "POST",
            body: formData,
            headers: headers,

        })
            .then((response) => response.json())
            .catch((error) => { console.error(error); });
    };



    const translateAudio = async () => {
        setGeneratedTranslation('');
        setLoading(true);
        const transcribed = await transcribe();
        setGeneratedTranslation(transcribed.text);
        // speak({ text: generatedTranslation });
        setLoading(false);
        };

        
useEffect(() => {
    if (generatedTranslation !== "") {
      speak({ text: generatedTranslation });
    }
  }, [generatedTranslation]);

    const handleFileChange = (e) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setSelectedFile(file)
        }
    }

    const handleChange = (e) => {
        const selectedValue = e.target.value;
        const selectedLabel = languages.find((language) => language.value === selectedValue)?.value;
        if (selectedLabel) {
            setLanguage(selectedLabel)
        }
    }

    return (
        <div>
            <div className=' w-full'>
         
                <div className='flex mt-8 mb-5 items-center space-x-3'>
                    {/* <Image src="./Bot.jpg" width={50} height={50} /> */}
                    <p className='text-left font-medium'>Choose your language</p>
                </div>

                <select
                    className='block w-3/4  border border-solid p-2 capitalize '
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


                <div className='flex justify-between mt-5 items-center  '>

                    <p className='text-left font-medium'>
                        Upload Your Audio{''}
                        <span className='text-slate-500'></span>
                    </p>


                </div>
                <input className="block w-50 text-sm text-gray-500   file:mr-4 mt-3 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-600 file:text-light hover:file:bg-blue-100 cursor-pointer"
                    type='file'
                    accept='audio/*'
                    placeholder=' The following file format are accepted :mp4a,mp3,webm,mp4,mpga'
                    onChange={handleFileChange} />
                {/* <p class="mt-2 w-3/4 text-sm text-gray-500 dark:text-gray-300" > The following file format are accepted :mp4a,mp3,webm,mp4,mpga</p> */}

                {!loading && (
                    <button className='bg-sky-600 cursor-pointer rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 w-1/2' onClick={translateAudio}>
                        Translate
                    </button>
                )}
                {loading && (
                    <button disabled className='bg-sky-600 rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8  hover:bg-sky-200 w-1/2' >
                        <LoadingDots color='white' style="large" />
                    </button>
                )}
                {generatedTranslation && (
                    <>
                        <label className='block my-2 text-md text-left font-medium text-gray-900 dark:text-white'>
                            Translation:
                        </label>
                        <div
                            onClick={() => {
                                navigator.clipboard.writeText(generatedTranslation);
                                toast('Translation copied to clipboard', {
                                    icon: <CopyOutlined />,
                                });
                            }}
                            className='p-2.5  w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer text-center'

                        >
                            {generatedTranslation.split('\n\n').map((paragraph, index) => (
                                <div key={index} className='text-left px-2 font-medium'>
                                    {paragraph.split('\n').map((line, subindex) => (
                                        <p key={subindex} className='my-1'>
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <p className='my-1 text-sm text-gray-500 dark:text-gray-300'>Click on translation to copy on clipboard</p>
                        <div className='mb-[-80px]' />
                    </>
                )}


            </div>
        </div>
    )
}

export default AudioTranslate