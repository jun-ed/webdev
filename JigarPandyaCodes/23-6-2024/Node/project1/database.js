// custom Module in Node.js
const mongoose = require('mongoose');

mongoose
.connect('mongodb://127.0.0.1:27017/metcdac')
.then(()=> console.log('Connected to MongoDB'))
.catch(()=> console.log('Err In DB'));

//  Promise - pending-  fullfilled then() , rejected catch()
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    age: Number
});

const userModel = mongoose.model('users', userSchema);
module.exports = userModel;