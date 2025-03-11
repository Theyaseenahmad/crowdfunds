import React from 'react'

const about = () => {
  return (
    <div className='h-screen w-full flex items-start justify-center gap-2 px-4' >

        <div className='w-2/5 py-24 flex flex-col gap-6 '>
        
        <div className='text-white '>
        <h2 className=' text-xl font-bold text-fuchsia-500'>Are you a Creator? Get your Fans to support you by Showcasing your Art</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eum expedita quisquam in nisi dolorum.</p>
        </div>
       
        <div className='text-white'>
        <h2 className=' text-xl font-bold text-fuchsia-500'>Love the Contents of your Favourite Creators Support them Here</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium architecto sed suscipit sequi aperiam porro.</p>
        </div>

        </div>

        <div className='size-[440px]'><img src="https://www.massivedynamicsusa.com/wp-content/uploads/2024/01/social-media-marketing.png" alt="" className='object-cover object-center w-full h-full ' /></div>
        
    </div>
  )
}

export default about