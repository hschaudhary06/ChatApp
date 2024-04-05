const { default: mongoose } = require('mongoose')
const db = require('../database')

db();

const userSchema = mongoose.Schema({
    user_id: {
        type: Number,
        unique: true,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    mobile_no: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    otp: {
        type: Number,
        required: true,
    },
    user_profile: {
        type: String
    },
    status: {
        type: Boolean, 
        default: false
    }
    
});

module.exports = mongoose.model("Users",userSchema);