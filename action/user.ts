"use server";

import { redirect } from "next/navigation";
import { signIn, signOut } from "next-auth/react"; // For Client Components
import { auth } from "@/lib/auth"; // For Server Components (Create this file)
import axios from "axios";
import { Session } from "next-auth";

// Login Function


// Logout Function


// Dashboard Action
export const dashboardaction = async (formdata: FormData) => {
  const session = (await auth()) as Session; // Auth from server
  const email = session?.user?.email;

  const username = formdata.get("username");
  const profilepic = formdata.get("profilepic");
  const coverpic = formdata.get("coverpic");
  const razorpayId = formdata.get("razorpayId");
  const razorpaySecret = formdata.get("razorpaySecret");

  if (!username || !profilepic || !coverpic || !razorpayId || !razorpaySecret) {
    throw new Error("Please fill all the fields");
  }

  const obj = {
    email,
    username,
    profilepic,
    coverpic,
    razorpayId,
    razorpaySecret,
  };

  const dashresult = await axios.post("/api/dashboard", obj);
  console.log(dashresult.data);
};

// Get Session Function
export const getSession = async () => {
  const session = await auth();
  console.log("Session from getSession action:", session);
  return session;
};

