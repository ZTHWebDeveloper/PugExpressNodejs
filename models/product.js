//PKs7mWuztwPHfRQ7
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const products = new Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
});
module.exports = mongoose.model('Product',products); //Create Table

