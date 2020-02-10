var express=require("express");
var router=express.Router();
var mongoDB = require("../models/mongo");
var ObjectId = require('mongodb').ObjectID;


router.get('/',function(req,res){
    // console.log("UPdate get "+req.query.id);
res.redirect('/update')
    // res.send({status: 200, message: 'DATA !!',data:req.query.id});
})



router.post('/',function(req,res){
    console.log("Update : "+JSON.stringify(req.body)+"  =  "+req.body);
    mongoDB.findOne({_id:ObjectId(req.body.id)},'users', function(err, result){
    console.log("IN UPDATE data ")
		if(err)
    throw err;
        else
        {
            console.log("DATA of update");
            console.log(result);
          res.send({status: 200, message: 'DATA !!',data:result});
        }
	});
})

module.exports=router;