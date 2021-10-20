var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
//Getting access to controllers
const addUser=require('../controllers/Add/addUser_C');
const findUser=require('../controllers/Find/findUser_C')
const findCred=require('../controllers/Find/findCredentails_C')
const updateCred=require('../controllers/Update/updateCredentails_C')
const updateDiv=require('../controllers/Update/updateDiv_C')
const updateRole=require('../controllers/Update/updateUserRole._C')

//Index router
router.get('/', (res) =>{
    res.send('Currently loading');
});

//Add user route
router.get('/addUser',addUser.addUser);

//Find routes
//Find by user
router.get('/findUser',findUser.findUser);
//Find credentials
router.get('/findCred',findCred.findCredentails);

//Update routes
//Update credentails
router.get('/updateCred',updateCred.updateCred);
//Update division
router.get('/updateDiv',updateDiv.updateDiv)
//Update user Role
router.get('/updateRole',updateRole.updateRole)

//Check creditails
router.get('/cred',(req,res)=>{
    const auth = req.headers[ 'authorization' ]
    //break the header up and collect the payload.
    const token = auth.split( ' ' )[ 1 ]
    try {
        //decode the token
        const decoded = jwt.verify(token, 'jwt-secret' )
        //Going through each ou to determine what type of user we dealing with
        //Find News reviews role of user
        if (decoded.ou == 'News Reviews' && decoded.role == 'Admin'){
            res.send({ 'role' : 'NewsAdmin'});
        }
        else if (decoded.ou == 'News Reviews' && decoded.role == 'Manager'){
            res.send({ 'role' : 'NewsManager'});
        }
        else if (decoded.ou == 'News Reviews' && decoded.role == 'User'){
            res.send({ 'role' : 'NewsUser'});
        }

        //Find Software reviews role of user
        else if (decoded.ou == 'Software Reviews' && decoded.role == 'Admin'){
            res.send({ 'role' : 'SoftAdmin'});
        }
        else if (decoded.ou == 'Software Reviews' && decoded.role == 'Manager'){
            res.send({ 'role' : 'SoftManager'});
        }
        else if (decoded.ou == 'Software Reviews' && decoded.role == 'User'){
            res.send({ 'role' : 'SoftUser'});
        }

        //Find the Hardwares reviews role of user
        else if (decoded.ou == 'Hardware Reviews' && decoded.role == 'Admin'){
            res.send({ 'role' : 'HardAdmin'});
        }
        else if (decoded.ou == 'Hardware Reviews' && decoded.role == 'Manager'){
            res.send({ 'role' : 'HardManager'});
        }
        else if (decoded.ou == 'Hardware Reviews' && decoded.role == 'User'){
            res.send({ 'role' : 'HardUser'});
        }

        //Find the opinion reviews user role
        else if (decoded.ou == 'Opinion Reviews' && decoded.role == 'Admin'){
            res.send({ 'role' : 'OpAdmin'});
        }
        else if (decoded.ou == 'Opinion Reviews' && decoded.role == 'Manager'){
            res.send({ 'role' : 'OpManager'});
        }
        else if (decoded.ou == 'Opinion Reviews' && decoded.role == 'User'){
            res.send({ 'role' : 'OpUser'});
        }
        //If we dont find role say undefined
        else {
            res.send({ 'role' : 'Undefined' });
        }
    }
    //if the JWT is not correct return error
    catch (err) {
        res.status( 401 ).send({ 'err' : 'You dont have valid JWT!' });
    }
})
//Export router
module.exports=router;