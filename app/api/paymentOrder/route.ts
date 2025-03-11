import ConnectDB from "@/lib/ConnentDB";
import PaymentModel from "@/models/Payment";
import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID as string,
    key_secret: process.env.RAZORPAY_KEY_SECRET
})


export async function POST(req:Request){

    // here only order has been created not paid ok !
    ConnectDB()

    console.log(process.env.RAZORPAY_KEY_ID,process.env.RAZORPAY_KEY_SECRET)

    const {amount,message,name,paymentTo} = await req.json();

    const order = await razorpay.orders.create({
        amount:amount*100,
        currency: "INR"
    })

    const notconfirmPayment = await PaymentModel.create({
        paymentTo:paymentTo,
        amount:amount,
        name:name,
        message:message,
        orderId:order.id,
        done:false
    })

    console.log(notconfirmPayment)

    return NextResponse.json(order)
}