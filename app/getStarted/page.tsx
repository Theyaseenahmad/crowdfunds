'use client'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'



const GetStarted = () => {


  const [category,setCategory] = useState('')
  console.log(category);



    const {data:session} =  useSession()
    if(session){
        redirect('/dashboard')
    }
    
    
  return (
    <div className="flex flex-col items-center gap-2 min-h-screen -z-10 p-2">

       <h2 className='text-purple-500 text-3xl font-bold  drop-shadow-[0_1.2px_1.2px_rgba(255,0,255,0.8)] '>Register as a Creator</h2> 

        {/* generate a simple email username password form */}
        <div className='w-[350px] flex flex-col gap-2 items-center justify-center h-[480px] rounded-lg bg-sky-900 p-2'>
       <form action="" className='flex flex-col gap-2  justify-center items-center p-2 rounded-lg w-64 mb-4'>
        <div className='flex flex-col justify-start'>
        <label className='text-white' htmlFor="email">Email</label>
        <input type="text" id='email' className='bg-transparent outline-none border-2 text-purple-300 border-white p-2 rounded-md' />
        </div>
        
        <div className='flex flex-col justify-start'>
        <label className='text-white' htmlFor="username">username</label>
        <input type="email" id='username' className='bg-transparent outline-none border-2 text-purple-300 border-white p-2 rounded-md'/>
        </div>

        
        <Menu as="div" className="relative inline-block text-left border-2 mt-2 border-white rounded-lg  w-60 h-12">
      <div>
        <MenuButton className="flex items-center w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-3 text-sm font-semibold text-white shadow-sm h-full ">
          Category
          <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-2 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <button type='button'
              onClick={()=>{setCategory('Technology')}}
              className="block w-full px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
             Technology
            </button>
          </MenuItem>
          <MenuItem>
          <button type='button'
              onClick={()=>{setCategory('Art')}}
              className="block w-full px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
             Art
            </button>
          </MenuItem>
          <MenuItem>
          <button type='button'
              onClick={()=>{setCategory('Sports')}}
              className="block px-4 w-full py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
             Sports
            </button>
          </MenuItem>
          <MenuItem>
            <button type='button' onClick={()=>{setCategory('Others')}}
              className="block w-full px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              Others
            </button>
          </MenuItem>
         
        </div>
      </MenuItems>
    </Menu>

        <div className='flex flex-col justify-start'>
        <label className='text-white' htmlFor="password">password</label>
        <input type="password" id='password' className='bg-transparent outline-none text-purple-300 border-2 border-white p-2 rounded-md' />
        </div>

        <div className='flex flex-col justify-start'>
        <label className='text-white' htmlFor="confirmPassword">confirm password</label>
        <input type="password" id='confirmPassword' className='bg-transparent text-purple-300 outline-none border-2 border-white p-2 rounded-md' />
        </div>


        <button className='bg-white text-blue-500 px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 w-full mt-4 text-lg' type="submit">getStarted</button>
       </form>











</div>





</div>
  )
}

export default GetStarted