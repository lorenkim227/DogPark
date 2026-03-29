const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    login: {type: String, required: true, alias: 'email'}, // maybe add unique: true
    password: String,
    permission: Number,
    creation: {type: Date, default: Date.now}
});

const User = mongoose.model('User', userSchema);

exports.create = async function(user){
    let newUser = new User(user);
    await newUser.save();
}

exports.readAll = async function(){
    return await User.find({});
}

exports.read = async function(uid){
    return await User.findById(uid);
}

exports.update = async function(user){
    await User.findByIdAndUpdate(user._id, user);
}

exports.del = async function(uid){
    await User.findByIdAndDelete(uid);
}