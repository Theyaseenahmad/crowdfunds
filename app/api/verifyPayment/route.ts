import ConnectDB from '@/lib/ConnentDB'
import PaymentModel from '@/models/Payment'
import crypto from 'crypto'
import { NextResponse } from 'next/server'

const generateSignature = (RazorpayOrderId:string,RazorpayPaymentId:string)=>{

    const key_secret = process.env.RAZORPAY_KEY_SECRET as string
    const data = `${RazorpayOrderId}|${RazorpayPaymentId}`;
    console.log('Data to Hash:', data);

    const hmac = crypto.createHmac('sha256', key_secret);
    hmac.update(data);
    return hmac.digest('hex');
 
}

export async function POST(req:Request){

    ConnectDB()
    const {orderId,RazorpayPaymentId,RazorpaySignature} = await req.json()

    const signature = generateSignature(orderId,RazorpayPaymentId)

    console.log('OrderId:', orderId);
    console.log('RazorpayPaymentId:', RazorpayPaymentId);
    // console.log('Key Secret:', key_secret); // Be careful with logging sensitive data


    if(signature !== RazorpaySignature){
        console.log("payment failed")
        console.log(signature, "-----and----- " ,RazorpaySignature)  
        return NextResponse.json({success:false,message:"payment failed"},{status:400})
    }


    // save payment details to your database or process the payment as per your requirement

    const newPayment = await PaymentModel.updateOne({
        orderId},{done:true}
       
    )

    

    return NextResponse.json({
        success:true,
        message:"payment successful",
        payment:newPayment
        
    },{status:200})
}