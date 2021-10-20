//Import 
const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    ou:  {//ou = stands for organisational unit
        type:String,
        required:true
    },
    division:{
        type:String,
        required:true
    },
    role: { // role = is the role that the user plays in the company there is 3 roles namely 1) User or Us - Any one signing up will be assigned as user 2) Manager or Man 3) Admin or Ad
        type:String,
        default:"User",
    },
    username: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    }
    
});

// Model
const MySchema = mongoose.model('MySchema', PostSchema);
//export schema
module.exports =  MySchema;