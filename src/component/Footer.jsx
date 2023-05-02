import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg mt-5 sm:text-base' >
        <Layout className='py-5  flex items-center justify-around lg:flex-col'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <Link href="/" >Nk@23</Link>
            <Link href="/" >@CopyRights</Link>

        </Layout>
    </footer>
  )
}

export default Footer