let {constants}=require("../constants")

let errorHandler = (err,req,res,next)=>{
 console.log(err);
    
 let statusCode = res.statusCode ? res.statusCode : 500;
 switch(statusCode){
     
    case constants.VALIDATION_ERROR:
     res.json({
        Title: "Validation Failed",
        message : err.message,
        stackTrace: err.stack })
     break

    case constants.NOT_FOUND:
     res.json({
        Title: "Not Found",
        message : err.message,
        stackTrace: err.stack })
     break

    case constants.FORBIDDEN:
     res.json({
        Title: "Forbidden",
        message : err.message,
        stackTrace: err.stack })
     break

    case constants.UNAUTHORISED:
     res.json({
        Title: "Unauthorised",
        message : err.message,
        stackTrace: err.stack })
     break

    case constants.SERVER_ERROR:
     res.json({
        Title: "Server error",
        message : err.message,
        stackTrace: err.stack })
     break

    default:
     console.log("no error, All good");
     break;
 
    }
}

module.exports = errorHandler;