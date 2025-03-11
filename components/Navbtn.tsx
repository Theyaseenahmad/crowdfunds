'use client'
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react'
import { CiGlobe } from "react-icons/ci";


const Navbtn =  () => {
      
  const { data: session } = useSession()

  console.log('session',session)
    

  //@ts-ignore
  let name = session?.user?.username 

  console.log('name',name)


  return (
    <div className="inline-flex rounded-md shadow-sm text-xs sm:text-sm" role="group">
      <Link 
        href={'/dashboard'} 
        className="inline-flex items-center px-2 sm:px-4 py-1 sm:py-2 font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
      >
        <svg className="w-3 h-3 me-1 sm:me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
        </svg>
        Dashboard
      </Link>
      <Link 
        href={`/${name}`} 
        className="inline-flex items-center px-2 sm:px-4 py-1 sm:py-2 font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
      >
        <CiGlobe className='mx-1'></CiGlobe>
        Your Page
      </Link>
    </div>
  )
}

export default Navbtn