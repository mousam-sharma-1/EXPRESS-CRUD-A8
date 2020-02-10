var express=require("express");
var router=express.Router();
const db =require('../config/sequelize');
var model= require('../models/seq-model');

console.log("data-sequelize")
router.get('/', (req,res)=>{
    model.findAll(
    //     {
    //     attributes: ['id', 'title', 'description', 'budget', 'value', 'email']
    // }
    )
    .then(data=>{
        console.log("OK !");
       // res.sendStatus(200);
        res.send({status: 200, message:"DATA ",data:data});
    })
    .catch(err => {
        res.send(err);
        console.log(err);
    })
 });


 router.post('/store', (req,res)=>{
     console.log("data :"+JSON.stringify(req.body));
    model.create({
        id:2,
        name:req.body.name,
        mobile:req.body.number1,
        email:req.body.email,
        password:req.body.password,
        confpassword:req.body.cpassword
    }).then(data => {
        console.log("Data stored successfully");
      res.send({status: 200, message: "Data stored successfully", data: data});
    }).catch(err => {
       // res.send({status: 400, message: "Data not stored successfully" })
       console.log(err);
    })
 })

module.exports=router;