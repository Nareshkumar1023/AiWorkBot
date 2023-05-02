// import { useState } from 'react';
// import axios from 'axios';

// const LogoBot = () => {
//   const [companyName, setCompanyName] = useState('');
//   const [logoUrl, setLogoUrl] = useState('');

//   const handleCompanyNameChange = (event) => {
//     setCompanyName(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('https://api.openai.com/v1/images/generations', {
//         prompt: `Generate a logo for the company ${companyName}. The logo should be simple, modern, and elegant, feature a symbol .
//           The logo should be easily recognizable and memorable.`,
//         size: "1024x1024",
//         response_format: 'url',
//         num_images: 1,
      
//       }, {
//         headers: {
//           'Authorization': `Bearer ${process.env.NEXT_PUBLIC_CHATGPT_API_KEY}`,
//           'Content-Type': 'application/json',
//         },
//       });
//       setLogoUrl(response.data.data[0].url);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}> 
//         <label>
//           Company name:
//           <input type="text" value={companyName} onChange={handleCompanyNameChange} />
//         </label>
//         <button type="submit">Generate logo</button>
//       </form>
//       {logoUrl && (
//         <img src={logoUrl} width={200} alt={`Logo for ${companyName}`} />
//       )}
//     </div>
//   );
// };

// export default LogoBot;
