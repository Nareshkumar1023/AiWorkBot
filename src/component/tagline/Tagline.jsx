import { useState } from 'react';
import axios from 'axios';

export default function TaglineGenerator() {
  const [tagline, setTagline] = useState('');
  const [formData, setFormData] = useState({
    industry: '',
    targetAudience: '',
    valueProposition: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
      prompt: `Generate a tagline for a ${formData.industry} targeting ${formData.targetAudience} with a ${formData.valueProposition}.`,
      max_tokens:1000,
      temperature:0.5,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_CHATGPT_API_KEY}`,
      },
    });
    console.log(response)
    setTagline(response.data.choices[0].text);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex flex-wrap">
    <div className="w-1/2 lg:w-1/2 px-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="industry" className="text-lg font-medium mb-2">Industry:</label>
          <input required placeholder='EX:technology,Clothing' id="industry" name="industry" type="text" value={formData.industry} onChange={handleInputChange}  className="rounded-lg border border-sky-600  focus:ring-sky-500 focus:border-1 p-3" />
        </div>
  
        <div className="flex flex-col">
          <label htmlFor="target-audience" className="text-lg font-medium mb-2">Target Audience:</label>
          <input placeholder='Ex:bussiness owners, women' id="target-audience" name="targetAudience" type="text" value={formData.targetAudience} onChange={handleInputChange} className="rounded-lg border border-sky-600 focus:ring-sky-500 focus:border-transparent p-3" required />
        </div>
  
        <div className="flex flex-col">
          <label htmlFor="value-proposition" className="text-lg font-medium mb-2">Value Proposition:</label>
          <input  placeholder='Ex:cloud-based solutions' id="value-proposition" name="valueProposition" type="text" value={formData.valueProposition} onChange={handleInputChange} className="rounded-lg border border-sky-600  focus:ring-sky-500 focus:border-transparent p-3" required/>
        </div>
  
        <button type="submit" className="bg-sky-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300">Generate Tagline</button>
      </form>
  
      {tagline && (
        <div className="mt-10">
          <h2 className="text-lg font-medium mb-2">Tagline:</h2>
          <p className="text-xl">{tagline}</p>
        </div>
      )}
    </div>
  </div>
  
  );
}
