let mongoose = require("mongoose")

let profileSchema = mongoose.Schema({
    Name : {type: String,
    required : [true, "Please add contact name"]},
    Bio : {type: String,
    required : [true, "Please add 'About me'"]},
    Courses : {type: String,
    required : [true, "Please add contact name"]},
},
{
    timestamp: true,
})

module.exports= mongoose.model("Profile",profileSchema)

