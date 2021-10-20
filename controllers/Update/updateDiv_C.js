const mongoose=require('mongoose');
const Schema=require('../../model/mySchema');
const URI=require('../../config/myURI').mongoURI;

//funtion to find user credentials
exports.updateDiv=function(req,resp){
    mongoose.Promise = global.Promise;
    //Connecting to database
    mongoose.connect(URI, {useMongoClient: true});

    //if connection is succesfull let user know if not let user know as well
    mongoose.connection.on( 'error' , function () {
        console.log( 'Something went wrong with connecting to Mongo DB' );
        process.exit();
    });

    //if succesfull let user know that we have succesfully connected to the database
    mongoose.connection.once( 'open' , function () {
        console.log('Connected to the database');
    });

    //Update user division
    Schema.findOneAndUpdate({username: req.query.username}, {ou: req.query.ou,  division: req.query.division}, {new: true}, function (err){
        if(err) {
            console.log("There was some sort of issue while trying to update the user division");
        }
            resp.send("updateing user division was succesfull");
        });
}
