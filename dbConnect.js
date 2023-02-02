const mongoose = require('mongoose')
require('dotenv').config();

mongoose.set('strictQuery', true);

mongoose.connect(process.env.DB_URL , {useUnifiedTopology:true , useNewUrlParser:true})

const connection = mongoose.connection


connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Successful')
})
connection.on('error' , (error)=>{
    console.log(error)
})

