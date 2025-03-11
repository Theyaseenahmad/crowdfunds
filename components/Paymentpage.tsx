'use client';
import axios from 'axios';
import Script from 'next/script';
import React, { useState } from 'react';

interface PaymentFormType {
  name: string;
  message: string;
  amount: number;
}

interface RazorpayResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

// interface RazorpayInstance {
//   open: () => void;
// }



const PaymentPage = ({username}:{username:string}) => {
  console.log('payment to:', username)
  const [paymentForm, setPaymentForm] = useState<PaymentFormType>({
    name: '',
    message: '',
    amount: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentForm({ ...paymentForm, [e.target.name]: e.target.value });
  };

  const pay =async (amount:number)=>{
    console.log(amount,paymentForm.name,paymentForm.message)

    const orderInServer = await axios.post('/api/paymentOrder',{amount,name:paymentForm.name,message:paymentForm.message,paymentTo:username})
    console.log("orderInServer",orderInServer)

    const paymentData = {
      key:process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      order_id:orderInServer.data.id,

      handler: async function (response: RazorpayResponse){
        console.log("response   ",response.razorpay_order_id)
        const data = await axios.post('/api/verifyPayment',{orderId:orderInServer.data.id,RazorpayPaymentId:response.razorpay_payment_id,RazorpaySignature:response.razorpay_signature})
        console.log("data",data)

        if(data.data.success === true){
          console.log('payment finally succeeded')
          // reload the page
          window.location.reload()
        }
        else {
          console.log('payment failed')
        }
      }
    }

    //@ts-ignore
    const payment = new (window as any).Razorpay(paymentData)
    payment.open()

    
  }


  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      <div className="h-full w-full rounded-lg p-4 bg-[#1E40AF]">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">
            Name
          </label>
          <input
            onChange={handleChange}
            value={paymentForm.name}
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">
            Message
          </label>
          <input
            onChange={handleChange}
            value={paymentForm.message}
            type="text"
            id="message"
            name="message"
            className="block w-full p-3 sm:p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="block mb-2 text-sm font-medium text-white">
            Amount (in rupees)
          </label>
          <input
            onChange={handleChange}
            value={paymentForm.amount}
            type="number"
            id="amount"
            name="amount"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button 
            type="button" 
            className="flex-1 min-w-[80px] text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 sm:px-5 py-2.5" 
            onClick={() => pay(100)}
          >
            Rs. 100
          </button>
          <button 
            type="button" 
            className="flex-1 min-w-[80px] text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 sm:px-5 py-2.5" 
            onClick={() => pay(200)}
          >
            Rs. 200
          </button>
          <button 
            type="button" 
            className="flex-1 min-w-[80px] text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 sm:px-5 py-2.5" 
            onClick={() => pay(300)}
          >
            Rs. 300
          </button>
        </div>

        <button 
          onClick={() => pay(paymentForm.amount)} 
          type="button" 
          className="text-white mt-6 sm:mt-8 w-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 sm:px-5 py-2.5"
        >
          Donate
        </button>
      </div>
    </>
  );
};

export default PaymentPage;
