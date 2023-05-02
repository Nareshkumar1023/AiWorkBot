import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_CHATGPT_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
    const { priceMin, priceMax, gender, age, personality } = req.body;
    const prompt = generatePrompt(priceMin, priceMax, gender, age, personality);
    console.log(prompt)
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.6,
        max_tokens:2048,
    });
    res.status(200).json({ result: completion.data.choices[0].text })
}

function generatePrompt(priceMin, priceMax, gender, age, personality) {
    const searchQuery = `gift ideas ${gender} ${personality} ${age} ${priceMin} - ${priceMax}`;
    const amazonLink = `https://www.amazon.com/s?k=${encodeURIComponent(searchQuery)}&tag=myassociatesid-20`;
    return `Suggest gift ideas with Amazon or flipkart products links between ${priceMin} and ${priceMax} in the ${gender} and based on ${age} years old and ${personality}. Here's an Amazon search link for your reference: ${amazonLink}`;
}
