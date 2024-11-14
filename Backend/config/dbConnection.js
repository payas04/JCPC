let mongoose = require("mongoose")

let connectDB = async ()=>{
try{
    let connect = await mongoose.connect("mongodb+srv://hammzza1605:admin@hamzacluster.74l3k.mongodb.net/hza?retryWrites=true&w=majority&appName=HamzaCluster")
    console.log("Connection established", connect.connection.host,connect.connection.name)
}
catch(err){
    console.log(err);
    // console.log("sdfsdf") 
    process.exit(1)  
}
}

module.exports= connectDB;
