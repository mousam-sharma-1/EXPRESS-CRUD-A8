var express=require("express");
var router=express.Router();
var mongoDB = require("../models/mongo");

// router.get('/',function(req,res){
// res.send("HELLO");
// })


router.get('/',function(req,res){
    mongoDB.find('users', function(err, result){
    console.log("IN HOME ")
		if(err)
    throw err;
		if(result.length>0)
		{
            // console.log("success : "+JSON.stringify(result));
            console.log("success : "+result.length);
            res.send({status: 200, message: 'Successfully',data: result});
        }
        else
        {
            console.log("NO DATA");
          res.send({status: 400, message: 'No Data !!'});
        }
	});
})

module.exports=router;