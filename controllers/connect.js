var express=require("express");
var router=express.Router();

// router.use("/mysql",require("./data-sequelize"));
//  router.use("/",require("./home"));
router.use("/signup",require("./signup"));
router.use("/login",require("./login"));
router.use("/",require("./homeMON"));
router.use("/delete",require("./Delete"));
router.use("/update",require("./Update"));

console.log("ConnectJS");

module.exports=router;