const mongose = require('mongoose')
const connectDB = async()=>{

    try{
        await mongose.connect('mongodb://localhost:27017/medigrow')
        console.log('Database connected')

    }
    catch(err){
        console.log(err)
    }
}

module.exports = connectDB;