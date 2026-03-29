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

const Reservation = mongoose.model('Reservation', reservationSchema);

exports.create = async function(reservation){
    let newReservation = new Reservation(reservation);
    await newReservation.save();
}

exports.readAll = async function(){
    return await Reservation.find({});
}

exports.read = async function(uid){
    return await Reservation.findById(uid);
}

exports.update = async function(reservation){
    await Reservation.findByIdAndUpdate(reservation._id, reservation);
}

exports.del = async function(uid){
    await Reservation.findByIdAndDelete(uid);
}