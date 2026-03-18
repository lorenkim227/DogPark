const dao = require('../model/UserDaoMem');

exports.getAll = function(req,res){
    res.status(200); // Ok status
    res.send( dao.readAll() ); // Sending the array
    res.end(); // Ends the response (optional but important)
};    

exports.get = function(req,res){
    let uid = parseInt( req.params.uid ); //takes the URL parameter

    let user = dao.read(uid);

    if(user != null){ // requested user exists
        res.status(200);
        res.send(user); //send the user data
    } else { // user id does not exists
        res.status(404);  // error
        res.send({msg:'User with this ID does not exists'});
    }
    res.end();
}

exports.postCreateUpdate = function(req,res){

    let uname = req.body.txt_name; //always red.body.<inputName>
    let ulogin = req.body.txt_login;
    let upwd = req.body.txt_password;
    let uperm = 2; 
    if (req.body.txt_permission ){
        uperm = parseInt( req.body.txt_permission );
    }

    if(req.body.txt_id && req.body.txt_id !== ""){
        // update operation
        console.log("Update...");
        let uid = parseInt( req.body.txt_id);
        let newuser = {_id: uid, name: uname, login: ulogin, permission: uperm}; //creates a user object (like the ones we have on lstUsers array)
        dao.update(newuser);

    } else {
        // create/insert operation
        let newuser = {name: uname, login: ulogin, permission: uperm}; //creates a user object (like the ones we have on lstUsers array)
        dao.create(newuser);
    }

    res.redirect("userpage.html"); //redirects output to this webpage
}

exports.getDelete = function(req,res){
    let uid = parseInt( req.params.uid ); //takes the URL parameter

    dao.del(uid);
    
    res.redirect("../userpage.html")

};