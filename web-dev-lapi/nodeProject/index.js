require('./database.js');

const express = require('express');
const userModel = import('./database.js');

const app = express();

app.get('/user', async (req, res) => {
    try{
        var result = await userModel.find;
        console.log(result);
        // res.status(200).send(result);
        res.render('userinfo.ejs',{ record : result});
    } catch(error){
        console.error(error);
        res.status(500).send('Server error');
    }
})

app.post('/user', (req, res) => {
    res.send('update data in mongodb');
})

app.delete('/user', (req, res) => {
    res.send('delete data from mongodb');    
})

app.put('/user', (req, res) => {
    res.send('create new data in mongodb');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});