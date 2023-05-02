import { useState } from 'react';
// import Image from 'next/image';



const GiftGenerator = () => {
  const [gender, setGender] = useState('man');
  const [age, setAge] = useState('');
  const [priceMin, setPriceMin] = useState(100);
  const [priceMax, setPriceMax] = useState(10000);
  const [personality, setpersonality] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault();

    if (loading) {
      return
    }
    setLoading(true)
    try {
      const response = await fetch("/api/gifts", {
        method: "Post",
        headers: {
          "Content": "application/json",
        },
        body: JSON.stringify({ priceMax, priceMin, age, gender, personality })
      });
      const data = await response.json();
      setResult(data.result)

    } catch (error) {
      alert("Failed to generate gift ideas")
    } finally {
      setLoading(false)
    }


  };

  return (
    <div className=" h-full" >
      <main className="container mx-auto max-w-4xl px-4 py-10" >
        {/* <img src="/Ai.gif" className="w-20 h-20" alt="" /> */}

        <form
          onSubmit={onSubmit}
          className="bg-sky-600 text-white shadow-md rounded-lg p-6 mb-10"
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-700 font-bold block mb-2">Gender</label>
              <select
                type="text"
                name="gender"
                className="bg-white appearance-none border rounded-lg py-3 px-20 text-sky-600 focus:outline-none focus:shadow-outline"
                placeholder="Enter a gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                // required
              >
                <option value="man">Man</option>
                <option value="women">Women</option>
              </select>
            </div>
            <div >
              <label className="text-gray-700 font-bold block mb-2">Age</label>
              <input
                type="number"
                className="bg-white text-sky-600 border rounded-lg  py-3 px-20 leading-tight focus:outline-none focus:shadow-outline"
                name="age"
                min={1}
                max={99}
                placeholder=" age"
                value={age}
                onChange={(e) => setAge(Number.parseInt(e.target.value))}
                required
              />
            </div>
            <div>
              <label className="text-gray-700 font-bold block mb-2">Personality</label>
              <input className="bg-white text-sky-600 border rounded-lg py-2
               px-4 focus:outline-none focus:shadow-outline"
                type="text"
                name="personality"
                placeholder="Enter personality"
                value={personality}
                onChange={(e) => setpersonality(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="text-gray-700 font-bold block mb-2">Price From</label>
              <input className="bg-white text-sky-600 border rounded-lg py-3 px-4 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="priceMin"
                placeholder="Enter a minimum price"
                value={priceMin}
                onChange={(e) => setPriceMin(Number.parseInt(e.target.value))}
                required
              />
            </div>
            <div>
              <label className="text-gray-700 font-bold block mb-2">Price To</label>
              <input className="bg-white text-sky-600 border rounded-lg py-3 px-4 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="priceMax"
                placeholder="Enter a maximum price"
                value={priceMax}
                onChange={(e) => setPriceMax(Number.parseInt(e.target.value))}
                required
              />
            </div>

            <div>
              <label className="text-gray-700 font-bold block mb-2">Interested</label>
              <input className="bg-white text-sky-600 border rounded-lg py-2 px-4 focus:outline-none focus:shadow-outline"
                type="text"
                name="personality"
                placeholder="optional"

                onChange={(e) => setpersonality(e.target.value)}
              />
            </div>
            <div className="col-span-3">
              <input
              
                type="submit"
                value="Generate gift ideas"
                className="py-2 px-5 mt-2 bg-sky-500 cursor-pointer text-white rounded-lg hover:bg-sky-700 focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
        </form>
        {loading && (
          <div >
            {/* <h2 className="text-xl font-bold">Looking for the best gifts 🎁</h2> */}
            <img src="/GifLoader.gif" className="w-20 h-20" alt='loading'/>
          </div>
        )}
        <  div className="mt-4">
          <h2 className="text-xl font-bold">Looking for the best gifts 🎁</h2>
          <ul className="mt-2">

            {result.split('\n').map((sentence, index) => (
              <li key={index} >{sentence}</li>
            ))}
          </ul>

        </div>
      </main>
    </div>

  );
};

export default GiftGenerator;
