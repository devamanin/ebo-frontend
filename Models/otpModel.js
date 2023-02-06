const {Schema,model} = require('mongoose')

module.exports.Otp=model('Otp',Schema({
    number:{
        type:String,
        required:true,
    },
    otp:{
        type:String,
        required:true
    },
    // after 5 minutes it will be automatically deleted from database
    createdAt:{type:Date,default:Date.now,index:{expires:300}}
},{timestamps:true})) 