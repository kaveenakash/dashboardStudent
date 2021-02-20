const express = require('express')
const Student = require("./models/student");


require("./db/connectDB")
const app = express();

app.use(express.json())


app.listen(5000,() =>{
    console.log("Server Started port 5000")
})

app.post('/student-add',(req,res) =>{
   const  {studentId,studentName,subject,marks,age} = req.body;
   let newStudent = new Student({ studentId,studentName,subject,marks,age});
    newStudent.save().then((success,err) =>{
        if(err){
            res.status(400).json({err:err})
        }
        res.status(200).json({success:'Data Added'})
    })

})

app.get('/student-details',async(req,res) =>{
    const students = await Student.find();
    res.json(students);
})