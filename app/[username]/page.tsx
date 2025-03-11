'use client'
import Paymentpage from "@/components/Paymentpage";
import Payments from "@/components/Payments";
import Link from "next/link"
import {  useParams } from "next/navigation";
import React from "react";
interface Params {
  username?:string
}

const Page = () => {

//  const {data:session} = useSession()

 const params:Params = useParams()
 console.log(params)

 
 

  // if(!session){
  //   redirect('/')
  // }

  // so i want to do an api request to get payments how can i do that

  
 
  
  
  
  return (
    <div>
      <div className="relative w-full h-[200px] sm:h-[300px]">
        <img
          className="object-cover object-center w-full h-full"
          src="https://wegotthiscovered.com/wp-content/uploads/2023/07/Toji-JJK.jpg?w=1200"
          alt=""
        />
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-12 h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] bg-red-600 z-10 rounded-xl overflow-hidden">
          <img
            src="https://i1.sndcdn.com/avatars-TbQ2OQ5LGD7IIyXE-LRZ81Q-t500x500.jpg"
            alt=""
            data-tag="creator-public-Username-avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col mt-20 items-center px-4">
        <h2 className="font-bold text-xl sm:text-2xl uppercase text-center">
          {`${params.username}`}
        </h2>
        <p className="text-center">Creating Animated art for VTTs</p>
        <div className="flex flex-wrap justify-center gap-3 text-sm sm:text-base">
          <p className="text-gray-500">* 14,004 members</p>
          <p className="text-gray-500">* 91 posts</p>
          <p className="text-gray-500">* $16,990/release</p>
        </div>
        <Link
          href={"/join"}
          className="text-white mt-4 bg-gradient-to-br from-purple-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Join for free
        </Link>

        <div className="flex flex-col md:flex-row gap-6 items-center justify-center rounded-xl p-4 sm:p-10">
          <div className="bg-blue-800 w-full sm:w-80 md:w-64 rounded-lg flex flex-col items-center overflow-hidden">
            <div className="bg-purple-500 h-24 sm:h-28 w-full overflow-hidden mb-2">
              <img className="object-contain w-full" src="https://c10.patreonusercontent.com/4/patreon-media/p/reward/5444045/bac5eaf610c64326a6b06f93a9d38011/eyJ3Ijo0MDB9/4.gif?token-time=2145916800&token-hash=6kF7gvyWwEKafWkOoyMS5oc9y9fsonulu71sQU5gK4o%3D" alt="" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold">Uncommon</h2>
            <div className="flex gap-2 justify-center items-center">
              <h2 className="text-lg sm:text-xl font-bold">$1.50 </h2>
              <p className="text-green-300 text-sm">/ release</p>
            </div>
            <button
              type="button"
              className="text-white w-4/5 bg-gradient-to-br from-purple-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-2"
            >
              join
            </button>
            <div className="p-2 text-sm">
              <p className="text-sm">
                Thank you ! Apart from our gratitude, youll get access to : 
                <br/>All
                of our assets <br /> access to the #sneak-peek channel in our Discord
                where you can see some of our latest creations your name in our
                Hall of Fame <br />All the download links can be found in our Master
                Post
              </p>
            </div>
          </div>
          <div className="bg-blue-800 w-full sm:w-80 md:w-64 rounded-lg flex flex-col items-center overflow-hidden">
            <div className="bg-purple-500 h-24 sm:h-28 w-full overflow-hidden mb-2">
              <img className="object-contain w-full" src="https://c10.patreonusercontent.com/4/patreon-media/p/reward/5444046/64b2211077d248e0ba0e2a59f5efe9f8/eyJ3Ijo0MDB9/1.jpg?token-time=2145916800&token-hash=gJZKDe3G00JyZ0hsVXh83_OdYines0b9dGGSfF6ncpY%3D" alt="" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold">Rare!</h2>
            <div className="flex gap-2 justify-center items-center">
              <h2 className="text-lg sm:text-xl font-bold">$2.50 </h2>
              <p className="text-green-300 text-sm">/ release</p>
            </div>
            <button
              type="button"
              className="text-white w-4/5 bg-gradient-to-br from-purple-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-2"
            >
              join
            </button>
            <div className="p-2 text-sm">
              <p className="text-sm">
                Thank you ! Apart from our gratitude, youll get access to : 
                <br/>All
                of our assets <br /> access to the #sneak-peek channel in our Discord
                where you can see some of our latest creations your name in our
                Hall of Fame <br />All the download links can be found in our Master
                Post
              </p>
            </div>
          </div>
          <div className="bg-blue-800 w-full sm:w-80 md:w-64 rounded-lg flex flex-col items-center overflow-hidden">
            <div className="bg-purple-500 h-24 sm:h-28 w-full overflow-hidden mb-2">
              <img className="object-contain w-full" src="https://c10.patreonusercontent.com/4/patreon-media/p/reward/5444048/e48b9e176528488aa3d6d3382244169c/eyJ3Ijo0MDB9/3.jpg?token-time=2145916800&token-hash=7r6J8Vn1YG94EzcGZtwLWPnSgGBhXj-HSM44exsDIac%3D" alt="" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold">Epic</h2>
            <div className="flex gap-2 justify-center items-center">
              <h2 className="text-lg sm:text-xl font-bold">$3.50 </h2>
              <p className="text-green-300 text-sm">/ release</p>
            </div>
            <button
              type="button"
              className="text-white w-4/5 bg-gradient-to-br from-purple-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-2"
            >
              join
            </button>
            <div className="p-2 text-sm">
              <p className="text-sm">
                Thank you ! Apart from our gratitude, youll get access to : 
                <br/>All
                of our assets <br /> access to the #sneak-peek channel in our Discord
                where you can see some of our latest creations your name in our
                Hall of Fame <br />All the download links can be found in our Master
                Post
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="payments w-full min-h-[450px] p-4 flex flex-col lg:flex-row justify-center gap-4">
        <div className="h-full w-full lg:w-2/5 rounded-lg p-4 bg-[#1E40AF]">
          <h2 className="text-xl text-white font-bold uppercase">Donations :</h2>
          <Payments></Payments>
        </div>

        <div className="w-full lg:w-2/5">
          <Paymentpage username={params.username as string}></Paymentpage>
        </div>
      </div>
    </div>
  );
};

export default Page;
