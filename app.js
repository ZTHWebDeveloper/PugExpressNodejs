const express = require('express');
const adminRoute = require('./routes/adminRoute');//adminRoute
const bodyParser =require('body-parser');
const mongoose = require('mongoose');//database mongoose
const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({extended:false}));//register
app.use(adminRoute);//use adminRoute


//Off line mongoDB
mongoose.connect('mongodb://localhost:27017/crud_api',{useNewUrlParser:true})
.then(result =>{
    app.listen(port,() =>{
        console.log('Server is running !! '+port);
    });
})
.catch(err =>{
    console.log(err);
});
