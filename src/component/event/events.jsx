
import { useState } from 'react';
import axios from 'axios';

export default function OfficeEventPlanner() {
  const [eventType, setEventType] = useState('');
  const [budget, setBudget] = useState('');
  const [attendees, setAttendees] = useState('');
  const [preferences, setPreferences] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
      prompt: `Generate event planning suggestions for an ${eventType} event with a budget of ${budget} and ${attendees} attendees. Suggestions should include venues, caterers, and other services with address in tamilNadu.`,
      max_tokens: 1000,
      temperature: 0.5,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_CHATGPT_API_KEY}`,
      },
    });
    setSuggestions(response.data.choices[0].text.trim().split('\n'));
    setLoading(false)
  };

  return (
    <div className="flex w-full flex-col items-center justify-center h-auto">
      <form onSubmit={handleSubmit} className="bg-sky-200 shadow-md w-96 rounded px-8 mt-4 pt-4 pb-8 ">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="event-type">
            Event type:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="event-type"
            type="text"
            placeholder="Company events"
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="budget">
            Budget:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="budget"
            type="text"
            placeholder="Mention your cost"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="attendees">
            Attendees:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="attendees"
            type="text"
            placeholder="No. of employees"
            value={attendees}
            onChange={(e) => setAttendees(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="preferences">
            Preferences:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="preferences"
            type="text"
            placeholder="Outdoor activities, BBQ"
            value={preferences}
            onChange={(e) => setPreferences(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Get suggestions
          </button>
        </div>
      </form>
      {loading && (
        <div>
          <img src="/event.gif" className="w-20 h-20" />
        </div>
      )}
      {suggestions.length > 0 && (
        <ul className="ml-4">
          {suggestions.map((suggestion, index) => {
            console.log(suggestion)
            return (
              <li className='mt-2' key={index}>
               {suggestion}
              </li>
            )
          })}
        </ul>
      )}
    </div>

  );
}
