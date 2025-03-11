
import mongoose from "mongoose"





const PaymentsSchema = new mongoose.Schema({

    paymentTo:{type:String},
    amount:{type:String},
    name:{type:String},
    message:{type:String},
    orderId:{type:String},
    done:{type:Boolean}


})

const PaymentModel = mongoose.models.payment || mongoose.model('payment', PaymentsSchema)

export default PaymentModel