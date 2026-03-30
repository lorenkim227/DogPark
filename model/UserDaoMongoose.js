const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: String,
    login:{type: String, required: true, alias:'email' },
    password: String,
    permission: Number,
    creation: {type: Date, default: Date.now }
});

const userModel = mongoose.model('user', userSchema);

exports.readAll = async function(){
    const lstUsers = await userModel.find();
    // Later try: find().sort({name:'asc'}).skip(0).limit(5);
    return lstUsers;
}

exports.read = async function(uid){
    const user = await userModel.findById(uid);
    return user;
}

exports.create = async function(user){
    const mongouser = new userModel(user);
    await mongouser.save();
    return mongouser;
}

exports.update = async function(user){
    const updateduser = await userModel.findByIdAndUpdate(user._id, user, {new: true});
    return updateduser;
    //Left as an exercise 1 
}

exports.del = async function(uid){
    const user = await userModel.findByIdAndDelete(uid);
    return user;
}

exports.deleteAll = async function(check){
    if(check === "test"){
        await userModel.deleteMany();
    }
}

exports.login = async function(ulogin){
    const user = await userModel.findOne({login: ulogin});
    return user;
}