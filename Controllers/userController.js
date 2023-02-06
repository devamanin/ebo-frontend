const bcrypt = require('bcrypt')

const _ =require('lodash')
const axios = require('axios')
const otpGenerator=require('otp-generator')
const twilio = require('twilio');

const {User} = require('../Models/userModel')
const {Otp} =require('../Models/otpModel')


const accountSid = 'AC2281c3bc14293d4a88a10e7eb2866ee9'; // Your Account SID from www.twilio.com/console
const authToken = 'd2eeaa762081cee11e9de73db8ce155e'; // Your Auth Token from www.twilio.com/console
const client = require('twilio')(accountSid, authToken);

function sendTextMessage(number,otp){
    // client.messages
    //   .create({
    //     body: 'Hello Your otp is',
    //     to: number, // Text this number
    //     from: '+12345678901', // From a valid Twilio number
    //   })
    //   .then((message) => console.log(message))
    //   .catch(error =>console.log(error))
    client.messages 
    .create({ 
       body: `Your otp is ${otp}`,  
       messagingServiceSid: 'MG33dce8a5db5a526f7abb67e4098bf2fd',      
       to: `${number}` 
     }) 
    .then(message => console.log(message.sid)) 
    .done();

}

module.exports.signUp = async(req,res) => {
    const user = await User.findOne({
        number:req.body.number
    })  
    if(user) return res.status(400).send("User already registered")
    const OTP =otpGenerator.generate(6,{
        digits:true,
        lowerCaseAlphabets:false,
        upperCaseAlphabets:false,
        specialChars:false,
    })
    const number=req.body.number
    console.log(OTP)
    const otp = new Otp({number:number, otp:OTP})
    const salt= await bcrypt.genSalt(10)
    otp.otp=await bcrypt.hash(otp.otp,salt)
    const result = await otp.save()
    sendTextMessage(number,OTP)
    return res.status(200).send("Otp send succesfully")
}

module.exports.verifyOtp = async(req,res) => {
    const otpHolder = await Otp.find({
        number:req.body.number
    })
    if(otpHolder.length === 0) return res.status(400).send("You use an expired otp")
    const rightOtpFind=otpHolder[otpHolder.length-1]
    const validUser = await bcrypt.compare(req.body.otp,rightOtpFind.otp)

    if(rightOtpFind.number === req.body.number && validUser){
        const user =new User(_.pick(req.body,["number"]))
        const token = user.generateJWT()
        const result=await user.save()

        const OTPDelete=await Otp.deleteMany({
            number:rightOtpFind.number
        })
        return res.status(200).send({
            message:"User registration successfull",
            token:token,
            data:result
        })
    }
    else{
        return res.status(400).send("Your otp was wrong!")
    }
}