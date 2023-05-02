import React from 'react'
import Sidebar from './Sidebar'
function Layout({children}) {
  return (
    <div className='h-screen flex flex-row justify-start bg-sky-600 ' style={{ border: '1px solid transparent' }}>
        <Sidebar/>
        <div className='flex-1 bg-white
        m-2 rounded-xl
        overflow-x-hidden h-auto overflow-y-scroll scrollbar-thin  scrollbar-thumb-white-100 scrollbar-track-white-50' > 
        {children}
 
        </div>
    </div>
  )
}

export default Layout