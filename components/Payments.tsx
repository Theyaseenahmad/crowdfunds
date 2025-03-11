import axios from "axios"
import React from "react"

interface PaymentType{
    name:string,
    amount:number,
    message:string
}

const Payments =  () => {

    
  const [payments, setPayments] = React.useState([])

  React.useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get('/api/getPayments')
        const data = await response.data
        setPayments(data)
      } catch (error) {
        console.log('Error fetching payments:', error)
      }
    }

    fetchPayments()
  }, [])

  console.log(payments)
  

  return (<div className="overflow-auto mt-4 h-80">
  {payments.map((p:PaymentType,i:number)=>{
    return (
      <div key={i} className="flex items-center gap-4 bg-blue-900 rounded-lg p-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center">
          <span className="text-xl font-bold text-white">{p.name[0]}</span>
        </div>
        <div className="text-white">
          <h5 className="font-medium">{p.name} donated <span className="font-bold text-green-400">₹{p.amount}</span></h5>
          <p className="text-sm text-gray-300">{p.message}</p>
        </div>
      </div>
    )
  })}
  </div>)
}

export default Payments