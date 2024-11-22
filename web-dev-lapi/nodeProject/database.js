// custome module in nodejs for databsase functionality
const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/testDB')
  .then(() => console.log('Connected! to MongoDB'))
  .catch(() => console.log('Connection failed!'))

//   mongoose will generate promise we will catch it using .then(), .catch() handlers

const Schema = mongoose.Schema;

// schema is like entity in database
const userSchema = new Schema({
    name : String,
    age : Number
})

const userModel = mongoose.model('user', userSchema);

module.exports = userModel; 
// this module will be used in our main app.js file for database operations.

