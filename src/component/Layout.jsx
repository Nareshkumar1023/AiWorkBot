import React from 'react'

const Layout = ({children,className=""}) => {
  return (
    <div className={`w-full h-full inline-block z-0  xl:p-10 lg:p-14 md:p-2 sm:p-8 ${className}`} >
    {children}
    </div>
  )
}

export default Layout
