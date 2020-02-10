var express=require("express");
var router=express.Router();
var mongoDB = require("../models/mongo");
var ObjectId = require('mongodb').ObjectID;

router.post('/',function(req,res){
    console.log("Delete : "+JSON.stringify(req.body)+"  =  "+req.body)
    mongoDB.remove({_id:ObjectId(req.body.id)},'users', function(err, result){
    console.log("IN DELETE ")
		if(err)
    throw err;
        else
        {
            console.log("DATA DELETED");
          res.send({status: 200, message: 'Deleted !!'});
        }
	});
})

module.exports=router;