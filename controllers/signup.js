var express=require("express");
var router=express.Router();
var mongoDB = require("../models/mongo");

router.post('/',function(req,res){
    console.log(req.body);
    mongoDB.findOne({email: req.body.email , password: req.body.password},'users', function(err, result){
		if(err)
    throw err;
		if(result.length>0)
		{
    console.log("user already registered !!");
    res.send({status: 400, message: 'user @lready registered !!'});            
        }
        else{
            mongoDB.insertOne({name: req.body.name , mobile: req.body.number1 , email: req.body.email , password: req.body.password, ConfPassword: req.body.cpassword},'users', function(err, result){
                if(err)
            throw err;
                if(result)
                {
                  res.send({status: 200, message: 'Stored Successfully'});
                }
                else
                {
                  res.send({status: 400, message: 'ERR@R !!'});            
                }
            });
        }
    })
})
module.exports=router;