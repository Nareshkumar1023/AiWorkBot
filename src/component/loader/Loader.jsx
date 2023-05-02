import React from 'react'
// import Image from 'next/image'
function Loader() {
  return (
    <div className='flex w-16 ' >
        <img className='m-auto' src='./GifLoader.gif' width={100} />
    </div>
  )
}

export default Loader