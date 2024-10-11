import { Schema } from "mongoose"
import mongoose from mongoose

const  subscriptionSchema = new Schema({
    subscriber:{
        type:Schema.Types.ObjectId, //
        ref:"User"
    }
})


export const Subscription = mongooose.model("Subscription",subscriptionSchema)