// ReservationController.js

const dao = require('../model/ReservationDaoMongoose');

exports.getAll = async function(req,res){
    res.status(200); // Ok status
    res.send( await dao.readAll() ); // Sending the array
    res.end(); // Ends the response (optional but important)
};    

exports.get = async function(req,res){
    let uid = req.params.id; //takes the URL parameter

    let reservation = await dao.read(uid);

    if(reservation != null){ // requested reservation exists
        res.status(200);
        res.send(reservation); //send the reservation data
    } else { // reservation id does not exists
        res.status(404);  // error
        res.send({msg:'Reservation with this ID does not exists'});
    }
    res.end();
}

exports.postCreateUpdate = async function(req,res){

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
        let uid = req.body._id;
        let newreservation = {_id: uid, name: uname, email: uemail, date: udate, time: utime, dogs: udogs, puppy: upuppy, senior: usenior, restype: urestype, doginfo: udoginfo}; //creates a newreservation object (like the ones we have on array)
        await dao.update(newreservation);

    } else {
        // create/insert operation
        let newreservation = {name: uname, email: uemail, date: udate, time: utime, dogs: udogs, puppy: upuppy, senior: usenior, restype: urestype, doginfo: udoginfo}; //creates a newreservation object (like the ones we have on s array)
        await dao.create(newreservation);
    }

    res.redirect("reservation.html"); //redirects output to this webpage
}

exports.getDelete = async function(req,res){
    let uid = req.params.id; //takes the URL parameter

    await dao.del(uid);
    
    res.redirect("../reservation.html")

};