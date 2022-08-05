import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    refID: {
        type: String
    },
    referrer: {
        type: String,
        required: true,
    },
    unpaidReferrals: {
        type: Number,
        default: 0,
    },
    totalReferrals: {
        type: Number,
        default: 0,
    },
    unpaidEarnings: {
        type: Number,
        default: 0,
    },
    totalEarnings: {
        type: Number,
        default: 0,
    },
})

const UserModel = mongoose.model('User', userSchema)

export default UserModel