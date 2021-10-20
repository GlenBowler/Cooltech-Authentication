const mongoose=require('mongoose');
const Schema=require('../../model/mySchema');
const URI=require('../../config/myURI').mongoURI;

//funtion to find user credentials
exports.addUser = function(req,resp){
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
    
    //Get user input from entries user inserted
    let user = new Schema({name: req.query.name, ou: req.query.ou, division: req.query.division, username: req.query.username, password: req.query.password})

    //Saving user to database
    user.save(function(err, data){
        //if there is error with adding user let user know
        if(err) {
            console.log(err);
            resp.status(500).send({message: "Error while trying to add user"});
        }
        //if all went well let user know that we have succesfully uploaded new user
        else {
            console.log(data);
            resp.send({message: "The user has been added."});
        }
    });
}

