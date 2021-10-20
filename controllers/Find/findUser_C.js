const mongoose=require('mongoose');
const Schema=require('../../model/mySchema');
const URI=require('../../config/myURI').mongoURI;
const jwt = require('jsonwebtoken');

//function to find user
exports.findUser= function (req,resp){
    mongoose.Promise = global.Promise;
    //Connecting to database
    mongoose.connect(URI, {useMongoClient: true});

    //if connection is not succesfull let user know if not let user know as well
    mongoose.connection.on( 'error' , function () {
        console.log( 'Something went wrong with connecting to Mongo DB' );
        process.exit();
    });
    
    //if succesfull let user know that we have succesfully connected to the database
    mongoose.connection.once( 'open' , function () {
        console.log('Connected to the database');
    });

    Schema.find({username: req.query.username} , function(err, user){
        //If there is an issue let user know that was not succesfull in finding user
        if(err) {
            console.log(err);
            resp.status(500).send({message: "Error getting user data"});
        }
        else {
            //Checking user token
            const token = jwt.sign(JSON .stringify(user[0]), 'jwt-secret' ,
            {algorithm: 'HS256' })
            resp.send({ 'token' : token})
        }
    });
}
