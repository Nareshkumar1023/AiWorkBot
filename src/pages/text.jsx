// import { useState } from 'react';
// import axios from 'axios';

// const OfficeUseForm = () => {
//   const [details, setDetails] = useState('');
//   const [plan, setPlan] = useState('');
//   const [imageUrl, setImageUrl] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         'https://api.openai.com/v1/engines/text-davinci-003/completions',
//         {
//           prompt: `Generate a plan for an office use building with the following details:\n\n${details}`,
//           max_tokens: 1024,
//           n: 1,
//           stop: ['Generated Plan:', 'Image:'],
//           temperature: 0.5,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${process.env.NEXT_PUBLIC_CHATGPT_API_KEY}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       const generatedPlan = response.data.choices[0].text.trim();
//       setPlan(generatedPlan);

//       const imageResponse = await axios.post(
//         'https://api.openai.com/v1/images/generations',
//         {
//           prompt: `Generate an image of the plan for the following office use building:\n\n${generatedPlan}`,
//           size: '512x512',
//           response_format: 'url',
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${process.env.NEXT_PUBLIC_CHATGPT_API_KEY}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       setImageUrl(imageResponse.data.choices[0].url);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <form onSubmit={handleSubmit} className="max-w-md w-full">
//         <label className="block font-medium text-gray-700 mb-2">Building details:</label>
//         <textarea
//           className="block w-full border-gray-900 rounded-md shadow-sm p-2 mb-4"
//           value={details}
//           onChange={(e) => setDetails(e.target.value)}
//         />
//              <button
//           type="submit"
//           className="bg-sky-500 text-white px-4 py-2 rounded font-medium hover:bg-blue-600 transition duration-200"
//         >
//           Generate Plan
//         </button>
//       </form>
//       <div>
//         <h2 className="font-medium text-lg mt-8 mb-2">Generated Plan:</h2>
//         {plan.split("\n").map((line, index) => (
//           <div
//             key={index}
//             className="text-left mb-4 text-gray-700 font-medium leading-6"
//           >
//             {line}
//           </div>
//         ))}
//         {imageUrl && (
//           <img
//             src={imageUrl}
//             alt={`Generated Construction Plan for ${plan}`}
//             className="mt-8"
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// export default OfficeUseForm

