import ConnectDB from "@/lib/ConnentDB";
import PaymentModel from "@/models/Payment";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        await ConnectDB()
    const payments = await PaymentModel.find({
        done:true
    }).sort({ amount: -1 }) // -1 for descending order

    console.log("payments",payments)

    return await NextResponse.json(payments)
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:error
        },{status:500})
    }
    
}