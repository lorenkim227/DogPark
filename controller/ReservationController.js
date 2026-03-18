const dao = require('../model/ReservationDaoMem');

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
    let uemail = req.body.txt_email;
    let udate = req.body.txt_date;
    let utime = req.body.txt_time;
    let udogs = parseInt(req.body.txt_dogs);
    let upuppy = req.body.txt_puppy === 'false';
    let usenior = req.body.txt_senior === 'false';
    let urestype = req.body.txt_restype;
    let udoginfo = req.body.txt_doginfo;
    if (req.body.txt_permission ){
        uperm = parseInt( req.body.txt_permission );
    }

    if(req.body.txt_id && req.body.txt_id !== ""){
        // update operation
        console.log("Update...");
        let uid = parseInt( req.body.txt_id);
        let newuser = {_id: uid, name: uname, email: uemail, date: udate, time: utime, dogs: udogs, puppy: upuppy, senior: usenior, restype: urestype, doginfo: udoginfo}; //creates a user object (like the ones we have on lstUsers array)
        dao.update(newuser);

    } else {
        // create/insert operation
        let newuser = {name: uname, email: uemail, date: udate, time: utime, dogs: udogs, puppy: upuppy, senior: usenior, restype: urestype, doginfo: udoginfo}; //creates a user object (like the ones we have on lstUsers array)
        dao.create(newuser);
    }

    res.redirect("reservation.html"); //redirects output to this webpage
}

exports.getDelete = function(req,res){
    let uid = parseInt( req.params.uid ); //takes the URL parameter

    dao.del(uid);
    
    res.redirect("../reservation.html")

};