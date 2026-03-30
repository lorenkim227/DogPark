const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    name: String,
    email: {type: String, required: true},
    date: String,
    time: String,
    dogs: Number,
    puppy: Boolean,
    senior: Boolean,
    restype: String,
    doginfo: String,
    creation: {type: Date, default: Date.now}
});

const reservationModel = mongoose.model('reservation', reservationSchema);

exports.readAll = async function(){
    const lstReservations = await reservationModel.find();
    // Later try: find().sort({name:'asc'}).skip(0).limit(5);
    return lstReservations;
}

exports.read = async function(uid){
    const reservation = await reservationModel.findById(uid);
    return reservation;
}

exports.create = async function(reservation){
    const mongoreservation = new reservationModel(reservation);
    await mongoreservation.save();
    return mongoreservation;
}

exports.update = async function(reservation){
    const updatedreservation = await reservationModel.findByIdAndUpdate(reservation._id, reservation, {new: true});
    return updatedreservation;
    //Left as an exercise 1 
}

exports.del = async function(uid){
    const reservation = await reservationModel.findByIdAndDelete(uid);
    return reservation;
}

exports.deleteAll = async function(check){
    if(check === "test"){
        await reservationModel.deleteMany();
    }
}