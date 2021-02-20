const mongoose = require('mongoose')
const crypto = require('crypto')

//user schema
const studentSchema = new mongoose.Schema({
    studentId:{
        type:String,
        trim:true,
        required:true,
        max:64
    },
    studentName:{
        type:String,
        trim:true,
        required:true
    },
    subject:{
        type:String,
        trim:true,
        required:true,
    },
    marks:{
        type:Number,
        required:true,
    },
    age:{
        type:Number,
        trim:true,
        required:true,
        max:64
    },
   
    
},{timestamps:true})

module.exports = mongoose.model('Student',studentSchema);