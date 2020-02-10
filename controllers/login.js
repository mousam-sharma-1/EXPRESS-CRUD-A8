var express=require("express");
var router=express.Router();
var mongoDB = require("../models/mongo");

router.post('/',function(req,res){
  console.log("login :: "+req.body);
    mongoDB.findOne({email: req.body.email , password: req.body.password},'users', function(err, result){
		if(err)
    throw err;
		if(result.length>0)
		{
            console.log("success : "+JSON.stringify(result));
            // res.redirect("/");
            res.send({status: 200, message: 'Successfully',data: JSON.stringify(result)});
        }
        else{
            console.log("not registered");
          // res.redirect('/signup');
          res.send({status: 400, message: 'Not registered !!'});
        }
	});
})

module.exports=router;