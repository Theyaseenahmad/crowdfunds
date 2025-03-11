
import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    coverpic:{type:String},
    username:{type:String},
    profilepic:{type:String},
    razorpayId:{type:String},
    razorpaySecret:{type:String}
})

export const userModel = mongoose.models?.user || mongoose.model("user",userSchema)