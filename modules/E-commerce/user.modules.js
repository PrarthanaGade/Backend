import mongoose from "mongoose"

const userSchema = new mongoose.Schema({}, {timestamp : true})

export const User = mongoose.model("User" , userSchema);