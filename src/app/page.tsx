"use client"
import React from 'react'
import MyRouter from './Router/MyRouter'

const page = () => {
  return (
    <div>
      <h1 className='font-bold text-[25px]'>This is home page</h1>
      <MyRouter/>
    </div>
  )
}

export default page