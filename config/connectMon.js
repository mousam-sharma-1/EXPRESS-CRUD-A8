var MongoClient =  require('mongodb').MongoClient;
var url = "mongodb+srv://mousam:mousam1399@cluster0-jig7z.mongodb.net/test?retryWrites=true&w=majority";


module.exports.init=function(cb){
MongoClient.connect(url,{useNewUrlParser:true},cb);
console.log("connected to mongo!!")
}