'use client'
import Link from "next/link";
import Navbtn from "./Navbtn";
import { signOut, useSession } from "next-auth/react";
import { redirect, usePathname } from "next/navigation";

 const logout = async () => {
  console.log("Logged out");
  await signOut();
  redirect("/");
};


const Navbar =  () => {


 const {data:session} = useSession()


  console.log('from navbar session', session)
  const pathname = usePathname()

  console.log('from navbar', pathname)


  
  return (
    <nav className=" text-white h-[60px] bg-transparent flex items-center justify-between md:px-20 px-6 py-10 gap-4 md:gap-0 ">

      <Link href={'/'} className="h-full w-30 flex items-center justify-center gap-1">
      
      <div className="size-10 object-cover rounded-full overflow-hidden ">
        <img src="https://pics.craiyon.com/2023-09-23/d66a93f91a894760b2ea430e2094f8fc.webp" alt="" />
        </div>
      <h2 className="text-2xl font-bold hidden md:flex">CrowdFunds</h2>

      </Link>

      {/* <div className="w-30 h-10 flex justify-center items-center gap-2">
      <Link href="/" className="w-10 h-10 rounded-full object-contain overflow-hidden">
      <img src="https://pics.craiyon.com/2023-09-23/d66a93f91a894760b2ea430e2094f8fc.webp" alt="" />
      
      </Link>
      <Link href={'/'} className="text-2xl font-bold">CrowdFunds</Link>
      </div> */}

      {pathname !== '/' ? '' : (<div className=" justify-center items-center gap-4 text-md font-medium hidden md:flex">
        <Link rel="stylesheet" href="/about" >About</Link>
        <Link rel="stylesheet" href="" >Creators</Link>
        <Link rel="stylesheet" href="" >Trending</Link>
        <Link rel="stylesheet" href="" >Categories</Link></div>) }
        
        
        <div className="flex items-center justify-center gap-2 ">

          {session && <Navbtn></Navbtn>}
          
          {session ?  (<form action={logout}><button className='bg-white text-blue-500 md:px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 px-2 text-sm md:text-base' type="submit">Logout</button></form>):(
            pathname !== '/login' ? <Link href={"/login"} type="button" className='bg-white text-blue-500 px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90'>Login</Link> : <Link href={"/getStarted"} type="button" className='bg-white text-blue-500 px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90'>Get Started</Link>
            )}
          
        </div>
      
    </nav>
  );
};

export default Navbar;
