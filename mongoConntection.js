const mongoose = require("mongoose");

exports.connectMongo = (uri)=>{
    mongoose.connect(uri).then(()=>{
        console.log("connected to db")
    }).catch(err=>{
        console.log(err.message);
    })
}