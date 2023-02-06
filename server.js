require('dotenv/config')

const mongoose =require('mongoose')

const app = require('./app')

mongoose.connect('mongodb://localhost:27017/',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
})
.then(()=>console.log("Connected to Mongo Db"))
.catch((err) => console.log("Connection failed"))


const port  = process.env.PORT || 3001

app.listen(port,()=>{
    console.log(`App running on port${port}`)
})