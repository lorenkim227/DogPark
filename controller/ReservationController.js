// ReservationController.js

const dao = require('../model/ReservationDaoMem');

exports.getAll = function(req,res){
    res.status(200); // Ok status
    res.send( dao.readAll() ); // Sending the array
    res.end(); // Ends the response (optional but important)
};    

exports.get = function(req,res){
    let uid = parseInt( req.params.id ); //takes the URL parameter

    let reservation = dao.read(uid);

    if(reservation != null){ // requested user exists
        res.status(200);
        res.send(reservation); //send the user data
    } else { // user id does not exists
        res.status(404);  // error
        res.send({msg:'Reservation with this ID does not exists'});
    }
    res.end();
}

exports.postCreateUpdate = function(req,res){

    let uname = req.body.name; //always red.body.<inputName>
    let uemail = req.body.email;
    let udate = req.body.date;
    let utime = req.body.time;
    let udogs = parseInt(req.body.dogs);
    let upuppy = req.body.puppy === 'on'; // realized checkbox is on and not false
    let usenior = req.body.senior === 'on';
    let urestype = req.body.restype;
    let udoginfo = req.body.doginfo;

    if(req.body._id && req.body._id !== ""){
        // update operation
        console.log("Update...");
        let uid = parseInt( req.body._id);
        let newuser = {_id: uid, name: uname, email: uemail, date: udate, time: utime, dogs: udogs, puppy: upuppy, senior: usenior, restype: urestype, doginfo: udoginfo}; //creates a user object (like the ones we have on lstUsers array)
        dao.update(newuser);

    } else {
        // create/insert operation
        let newuser = {name: uname, email: uemail, date: udate, time: utime, dogs: udogs, puppy: upuppy, senior: usenior, restype: urestype, doginfo: udoginfo}; //creates a user object (like the ones we have on lstUsers array)
        dao.create(newuser);
    }

    res.redirect("/reservation.html"); //redirects output to this webpage
}

exports.getDelete = function(req,res){
    let uid = parseInt( req.params.id ); //takes the URL parameter

    dao.del(uid);
    
    res.redirect("/reservation.html")

};