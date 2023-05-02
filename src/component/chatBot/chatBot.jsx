import { useState, useEffect, useRef } from "react";

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_CHATGPT_API_KEY,
});
const openai = new OpenAIApi(configuration);

const App = () => {

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isThinking, setIsThinking] = useState(false);

  const messagesEndRef = useRef(null)


  const onSubmitAction = () => {
    if (!input) return;
    setIsThinking(true)
    setMessages([...messages, { role: "user", content: input }]);
  }

  const callOpenaiAPI = async () => {
    setInput("");
    try {
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: messages,
        max_tokens: 500,
        temperature: 0,
      });
      setIsThinking(false)
      setMessages([...messages, completion.data.choices[0].message]);
    } catch (error) {
      setIsThinking(false)
      if (error.response) {
        // console.log(error.response.status);
        // console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
  }

  const preloadSVG = (
    <>
      <svg className="inline w-8 h-8 mr-2 text-white animate-spin fill-sky-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
      </svg >
      <span className="text-sky-400 opacity-70"></span>
    </>
  )

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }


  useEffect(() => {
    input && callOpenaiAPI();
    scrollToBottom();
  }, [messages])

  return (
    <>
      <div className="relative max-w-full mx-auto min-h-[calc(100vh-150px)] pb-[170px] "  >
      
        {messages.map((message, i) => (
          <div key={i} className={`my-5  mx-3 w-1/2 ${message.role === "assistant" ? "ml-auto text-right" : "mr-auto text-left"}`} >
            <div style={{ maxWidth: '100%' }}
              className={`p-3  ${message.role !== "assistant" ? "bg-sky-600 text-white w-full " : "bg-gray-300 text-black w-full"} rounded-lg`}>
              <div className="list-disc text-left">
                  {message.content.split('\n').map((item, j) => (
          <div key={j}>{item}</div>
        ))}
      </div>
            </div>
            <div ref={messagesEndRef} />
          </div>
        ))}
        {isThinking &&
          <div className="p-3 max-w-full text-sky-400 my-2 ml-auto">
            {preloadSVG}
          </div>}
      </div >
      <img src="./botLoad.gif" className="-mt-5 ml-20" width={80} />
      <div className="fixed bottom-10 rounded-lg mx-44 bg-gray-900 flex items-center h-[70px] p-2 w-1/2 md:p-8" >

        <div className="mx-auto flex justify-between max-w-3xl" >

          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow p-2 rounded-lg mr-2 w-[40vw] md:text-xl"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && e.shiftKey === false) {
                e.preventDefault()
                input && onSubmitAction()
              }
            }}
          />
          <button
            onClick={onSubmitAction}
            className="bg-sky-600 text-white w-full max-w-[80px] uppercase px-4 py-2 rounded-lg hover:bg-sky-900 md:text-2xl md:max-w-[150px]"
          >
            Send
          </button>
          
        </div>
      </div>

      {!messages.length &&
          <div className="absolute  shadow-2xl top-[100px] left-[400px] max-w-[700px]" >
            <img src="./customer.gif" />
          </div>
      }

    </>
  );
}

export default App;