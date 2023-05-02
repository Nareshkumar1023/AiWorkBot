import { useState } from 'react'
import axios from 'axios'
import {useSpeechSynthesis} from 'react-speech-kit'
const DoctorBot = () => {
  const { speak } = useSpeechSynthesis();
  const [symptoms, setSymptoms] = useState('')
  const [diagnosis, setDiagnosis] = useState('')
  const [doctors, setDoctors] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSymptomsChange = (e) => {
    setSymptoms(e.target.value)
  }

  const handleSubmit = async (e) => { 
    e.preventDefault()

    setIsLoading(true)
    try {
      const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
        prompt: `I have the following symptoms: ${symptoms}.what are some brief cure treatment options.Can you recommend hospitals and doctors in Tamil Nadu in Chennai with their addresses and phone numbers?`,
        max_tokens:1000,
        temperature:0.5,
        n: 1,
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_CHATGPT_API_KEY}`,
          'Content-Type': 'application/json',
        },
      })
      const text = response.data.choices[0].text
      // console.log(text)
      const doctorNameRegex = /(?<=- Doctor Name: ).+?(?= Address:)/gs
    const doctorAddressRegex = /(?<=Address: ).+?(?=\n|$)/gs
    const doctorNames = text.match(doctorNameRegex)
    const doctorAddresses = text.match(doctorAddressRegex)
      const doctors = []
      if (doctorNames && doctorAddresses) {
        doctorNames.forEach((name, index) => {
          doctors.push({ name, address: doctorAddresses[index] })
        })
      }
      setDoctors(doctors)
      setDiagnosis(text.replace(doctorNameRegex, '')) 
      speak({ text: text.replace(doctorNameRegex, '') })

// this get is for doctors lists

      const medicationResponse = await axios.get(`https://clinicaltrials.gov/api/query/full_studies?expr=${symptoms}&min_rnk=1&max_rnk=10&fmt=json`)
      const medications = medicationResponse.data.FullStudiesResponse.FullStudies.filter(study => study.Intervention.InterventionType === "Drug")
      
      console.log(medications)
      setIsLoading(false)
      // speak({text:diagnosis})
    } catch (error) {
     
      setIsLoading(false)
    }
  }
  
  return (
    <div className="p-4">
      <form className="border-0 rounded-lg border-sky-500 p-4" onSubmit={handleSubmit}>
        <label className="block">
          <span className="font-bold">Symptoms:</span>
          <input placeholder='Ex: rat fever, dengue, joint pain' className="block text-1xl border border-gray-400 p-2 rounded-lg mt-2 w-full" type="text" value={symptoms} onChange={handleSymptomsChange} required/>
        </label>
        <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded mt-4" type="submit">Get diagnosis</button>
      </form>
      
      {isLoading ? (
  <p className="mt-4">
    <img src='/Scope.gif' width={100} />
  </p>
) : doctors.length > 0 ? (
  <div className="mt-4">
    <h2 className="text-xl font-bold">Recommended doctors:</h2>
    <ul className="mt-2">
      {doctors.map((doctor, index) => (
        <li key={index} className="mt-2">
          <h3 className="font-bold">{doctor.name}</h3>
          <p>{doctor.address}</p>
        </li>
      ))}
    </ul>
  </div>
) : (
  <p></p>
)}
      {diagnosis && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Doctor's advice:</h2>
          <ul className="mt-2">
            
          {diagnosis.split('\n').map((sentence, index) => (
        <li key={index} className="diagnosis">{sentence}</li>
      ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default DoctorBot


