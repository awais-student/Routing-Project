import React from 'react'
import Link from 'next/link'



const  Header = () => {
  return <div className='flex items-center justify-between bg-gray-700 p-5'>
    <h1 className='text-white font-bold text-[30px]'>Logo</h1>
    <div className='space-x-3 text-white font-bold'>
    <Link href="/About">About</Link>
    <Link href="/Product">Product</Link>
    <Link href="/Courses">Courses</Link>
    </div>
   
  </div>
}

export default Header