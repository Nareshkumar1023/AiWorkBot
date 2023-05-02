const generateDescription = async({
    // title,
    subject,
    keyWords,
    tone,
    numWords,
})=>{
    try {
        const response= await  fetch("https://api.openai.com/v1/engines/text-davinci-002/completions",{
         method:"POST",
         headers:{
            "Content-Type":"application/json",
            'Authorization':`Bearer ${process.env.NEXT_PUBLIC_CHATGPT_API_KEY}`
         },
         body:JSON.stringify({
            prompt: `Write an email describing a ${subject} with a subject line focused on ${subject ? `the ${subject}` : `general information`}. Incorporate the following keywords: ${keyWords || 'none'}.
            The email should be ${numWords || 200} words in ${tone || 'neutral'} .`,
            max_tokens: 100,
            temperature: 0.5,
            n: 1,

         }),

        });
        const data= await response.json();
        return data.choices[0].text;
    } catch (error) {
        console.log(err)
        // return '';
    }
};
export default async function handler(req,res){
    const {
        // title,
        subject,
        keyWords,
        tone,
        numWords,
    }=req.body;
    const description = await generateDescription({
        // title,
        subject,
        keyWords,
        tone,
        numWords,
    });
    res.status(200).json({
        description
    })
}