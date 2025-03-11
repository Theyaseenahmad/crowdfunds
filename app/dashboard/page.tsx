'use client'
import { redirect } from 'next/navigation'
import { dashboardaction } from '../../action/user'
import { useSession } from 'next-auth/react'




const Dashboard =  () => {

        
 const {data:session} = useSession()

 if(!session){
        redirect('/')
 }

  return (
    <div className='flex flex-col lg:flex-row justify-around gap-8 p-4'>
      <form action={dashboardaction} className='w-full lg:w-2/5 flex flex-col justify-center items-center gap-1'>
        <div className='w-full min-h-screen flex flex-col gap-2 bg-gradient-to-br from-sky-900 to-violet-950 p-4 rounded-lg'>
          <h2 className='text-xl sm:text-2xl font-bold uppercase text-center mb-4'>Profile Details</h2>

          <div className='w-full mb-4'>
            <label htmlFor="email" aria-disabled className="block mb-2 text-sm font-medium text-white dark:text-white">email</label>
            <input disabled defaultValue={session?.user?.email || ''}  type="text" id="email" name="email" className="bg-gray-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          </div>

          <div className='w-full mb-4'>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-white dark:text-white">username</label>
            <input type="text"  id="username" name="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          </div>

          <div className='w-full mb-4'>
            <label htmlFor="coverpic" className="block mb-2 text-sm font-medium text-white dark:text-white">cover picture</label>
            <input type="text" id="coverpic" name="coverpic" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          </div>

          <div className='w-full mb-4'>
            <label htmlFor="profilepic" className="block mb-2 text-sm font-medium text-white dark:text-white">profile picture</label>
            <input type="text" id="profilepic" name="profilepic" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          </div>

          <div className='w-full mb-4'>
            <label htmlFor="razorpayId" className="block mb-2 text-sm font-medium text-white dark:text-white">razorpay Id</label>
            <input type="text" id="razorpayId" name="razorpayId" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          </div>

          <div className='w-full mb-4'>
            <label htmlFor="razorpaySecret" className="block mb-2 text-sm font-medium text-white dark:text-white">razorpay Secret</label>
            <input type="text" id="razorpaySecret" name="razorpaySecret" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          </div>

          <button type="submit" className="text-white mt-4 w-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            <p>Configure to accept razorpay payments</p>
          </button>
        </div>
      </form>

      <div className='w-full lg:w-2/5 grid grid-cols-1 sm:grid-cols-2 gap-4 py-8'>
        <div className='rounded-md bg-gradient-to-br h-32 w-full from-sky-900 to-violet-950 shadow-lg text-white flex flex-col justify-center items-center'>
          <h4 className='text-sm sm:text-base'>monthly fund raised</h4>
          <h3 className='drop-shadow-[0_1.2px_1.2px_rgba(255,0,255,0.8)] text-2xl sm:text-3xl font-bold'>$10243</h3>
        </div>

        <div className='rounded-md bg-gradient-to-br h-32 w-full from-sky-900 to-violet-950 shadow-lg text-white flex flex-col justify-center items-center'>
          <h4 className='text-sm sm:text-base'>Time Spent</h4>
          <h3 className='drop-shadow-[0_1.2px_1.2px_rgba(255,0,255,0.8)] text-2xl sm:text-3xl font-bold'>1024 mins</h3>
        </div>

        <div className='rounded-md bg-gradient-to-br h-32 w-full from-sky-900 to-violet-950 shadow-lg text-white flex flex-col justify-center items-center'>
          <h4 className='text-sm sm:text-base'>Subscribers this month</h4>
          <h3 className='drop-shadow-[0_1.2px_1.2px_rgba(255,0,255,0.8)] text-2xl sm:text-3xl font-bold'>1023</h3>
        </div>

        <div className='rounded-md bg-gradient-to-br h-32 w-full from-sky-900 to-violet-950 shadow-lg text-white flex flex-col justify-center items-center'>
          <h4 className='text-sm sm:text-base'>profile Visits</h4>
          <h3 className='drop-shadow-[0_1.2px_1.2px_rgba(255,0,255,0.8)] text-2xl sm:text-3xl font-bold'>40243</h3>
        </div>

        <div className='rounded-md bg-gradient-to-br h-32 w-full from-sky-900 to-violet-950 shadow-lg text-white flex flex-col justify-center items-center'>
          <h4 className='text-sm sm:text-base'>total videos</h4>
          <h3 className='drop-shadow-[0_1.2px_1.2px_rgba(255,0,255,0.8)] text-2xl sm:text-3xl font-bold'>23</h3>
        </div>

        <div className='rounded-md bg-gradient-to-br h-32 w-full from-sky-900 to-violet-950 shadow-lg text-white flex flex-col justify-center items-center'>
          <h4 className='text-sm sm:text-base'>total views</h4>
          <h3 className='drop-shadow-[0_1.2px_1.2px_rgba(255,0,255,0.8)] text-2xl sm:text-3xl font-bold'>302431</h3>
        </div>
      </div>
    </div>
  )
}

export default Dashboard