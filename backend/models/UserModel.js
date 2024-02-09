import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    gender: String,
})

export default mongoose.model("Users", UserSchema)