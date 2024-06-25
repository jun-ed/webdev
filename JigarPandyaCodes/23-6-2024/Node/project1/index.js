// console.log('test message ');

const express = require('express');
const userModel = require('./database.js');
const app = express();

// http://localhost:9000/users
app.get("/users" , async(req,res)=>{
    try{
        var result = await userModel.find();
        // res.status(200).send(result);
        res.render('userinfo.ejs',{xyz: result  });
    }
    catch(err){
        res.status(403).send('Error in Fetching Data');
    }
});
app.post("/users",(req,res)=>{
    res.send('Store data In mongodb');
});
app.put("/users",(req,res)=>{
    res.send('Update data In mongodb');
});
app.delete("/users",(req,res)=>{
    res.send('Delete data From mongodb');
});

app.listen(9000);