
import { NextRequest, NextResponse } from "next/server"
import ConnectDB from "@/lib/ConnentDB";
import { userModel } from "@/models/userModel";

export async function POST(request:NextRequest){

    

    const dashboardformobj = await request.json()
    console.log('from route',dashboardformobj)
    try {
        await ConnectDB()

        
        const UpdatedUser = await userModel.findOneAndUpdate({
            email : dashboardformobj.email
        },{
            username:dashboardformobj.username,
            profilepic:dashboardformobj.profilepic,
            coverpic:dashboardformobj.coverpic,
            razorpayId:dashboardformobj.razorpayId,
            razorpaySecret:dashboardformobj.razorpaySecret
        },{new:true})

        if(!UpdatedUser){
            return NextResponse.json({
                success:false,
                message:"user not found"
            })
        }

        

        

        return NextResponse.json({
            suceess:true,
            message:dashboardformobj
        })
    } 
    
    catch (error) {
        return NextResponse.json({
            success:false,
            message:error
        })
        
    }


}