
import React from 'react'
import "./globals.css"
import Link from 'next/link'

const Home = () => {
  return (
    <div className='w-full min-h-screen'>
    <div className='flex w-full items-start justify-center h-screen gap-16 '>
     <div id='content' className='md:w-1/3 px-4 md:px-0 w-full py-20 flex flex-col justify-between'>
      <h1 className='text-4xl font-bold text-white mb-4'>Crowdfunding Platform</h1>
      <p className='text-lg text-white mb-6'>Get your Fans to Contribute. <br /> Support your Favorite Artists.</p>
      <div className='flex gap-4 mb-4'>
        <Link href={'/getStarted'} className='bg-white text-blue-500 px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90'>Get Started</Link>
        <Link href={'/about'} className='border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10'>Learn More</Link>
      </div>

      <div className='mt-12'>

        <h2 className='text-2xl font-bold text-white mb-2'>Find your favorite creators here</h2>
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Creators..." required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
      </div>
     </div>
     
     <div id='image' className='h-[550px] hidden md:flex justify-center items-start'>
      <img src={'https://cheehun.com/flipbook-maker/images/flipbook-share.png'} alt='img' className='w-full h-full object-cover  bg-transparent  top-10'></img>
      
     </div>

    </div>
    
    
    </div>
  )
}

export default Home



