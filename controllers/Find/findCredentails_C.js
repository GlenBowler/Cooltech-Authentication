const mongoose=require('mongoose');
const Schema=require('../../model/mySchema');
const URI=require('../../config/myURI').mongoURI;

//funtion to find user credentials
exports.findCredentails=function (req,resp){
    mongoose.Promise = global.Promise;
    //Connecting to database
    mongoose.connect(URI, {useMongoClient: true});

    //If error getting into db let user know
    mongoose.connection.on( 'error' , function () {
        console.log( 'Something went wrong with connecting to Mongo DB' );
        process.exit();
    });
    mongoose.connection.once( 'open' , function () {
        console.log('Connected to the database');
    });

    //Find user credentions inside Schema
    Schema.find({ou: req.query.ou} , function(err, creds){
        if(err) {
            console.log(err);
            resp.status(500).send({message: "There was an error getting the credentials"});
        }
        else {
            resp.send(creds);
        }
        });
}
