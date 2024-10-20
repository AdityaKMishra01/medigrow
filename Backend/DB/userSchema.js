const mongose = require('mongoose')
const useSchema = new mongose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const User = mongose.model('User',useSchema);
module.exports = User;