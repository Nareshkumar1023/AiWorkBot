// Translate text api

import { Configuration,OpenAIApi } from "openai"

const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_CHATGPT_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  
export default async function handler(req,res){
        
        const{prompt }=req.body
        try {
            const completion = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: prompt,
                max_tokens:1000,
                temperature:0.5,
              });
              res.status(200).json({
                success:true,
                data:completion.data.choices[0].text,
              });
            
        } catch (error) {
            if(error){
                console.log(error)
            }
            res.status(400).json({
                success:false,
                error:"Failed to translate"
            });
        }


}