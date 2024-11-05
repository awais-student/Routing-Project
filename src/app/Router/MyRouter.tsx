import { useRouter } from 'next/navigation'
import React from 'react'

const MyRouter = () => {
    const route = useRouter()
    const OpenLink = ()=> {
        route.push("/Product")
    }
  return (
    <>
    <div>
        <h1>This is Router Page</h1>
        <button onClick={OpenLink} className='p-5 bg-blue-500 text-white font-bold mt-10 rounded-md'>Apply Now</button>
    </div>
    </>
  )
}

export default MyRouter