
import mongoose from "mongoose"


const ConnectDB = async ()=>{
    try {
        
    console.log(process.env.MONGO_URI )
     await mongoose.connect(process.env.MONGO_URI!)
    console.log('connected to db')


    } catch (error) {
        
        console.error("error connecting to db",error)
        
    }


}

export default ConnectDB

// export const config = {
//     runtime: 'nodejs'
//   }