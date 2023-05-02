import { Configuration,OpenAIApi } from "openai"

const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_CHATGPT_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  
export async function generateConstructionPlan(details) {
  const prompt = `Generate a building construction plan \n site plan \n\n Timeline and builder websites with the following details: ${details}in tamil nadu .` ;

  const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: prompt,
    max_tokens:1000,
    temperature:0.5,
  })

  return response.data.choices[0].text.trim();
  
}

