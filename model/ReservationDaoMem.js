let lstReservations = [
    {_id:1,name:'Loren Kim', email:'lkim1@loyola.edu', date:'2026-03-20', time:'10:00', dogs:2, puppy:false, senior:false, restype:'walker', doginfo:'Peyote (6 yrs), Violet (7 yrs)'},
    {_id:1,name:'Ellen Salovaara', email:'ellen@loyola.edu', date:'2026-01-30', time:'11:00', dogs:1, puppy:true, senior:false, restype:'trainer', doginfo:'I want Luna to be trained to do tricks'},
    {_id:1,name:'Braden Kletz', email:'braden@loyola.edu', date:'2026-02-11', time:'09:00', dogs:1, puppy:false, senior:true, restype:'daycare', doginfo:'My dog (Max) is a senior and needs to be watched during the day'},
    {_id:1,name:'Andrew Szalczyk', email:'andrew@loyola.edu', date:'2026-02-24', time:'14:00', dogs:3, puppy:false, senior:false, restype:'trainer', doginfo:'My 3 chihuahuas need to stop biting people. Train them.'},
    {_id:1,name:'Gobi Hernandez', email:'gobi@loyola.edu', date:'2026-03-02', time:'19:00', dogs:4, puppy:true, senior:true, restype:'walker', doginfo:'Jax, Skylar, Pyro, and Storm all love to walk and sniff, Jax is older and walks slower'}
];

exports.realAll = function(){
    return lstReservations;
}

exports.read = function(uid){
    let user = null;
    for(let i=0; i<lstReservations.length; i++){ 
        if(lstReservations[i]._id === uid ){ 
            user = lstReservations[i]; 
            break;
        }
    }
    return user;
}

// generated

exports.getById = function(uid){
    let user = null;
    for(let i=0; i<lstReservations.length; i++){ //search for the user with the requested ID
        if(lstReservations[i]._id === uid ){ // found ID match
            user = lstReservations[i]; 
            break;
        }
    }
    return user;
}



exports.create = function(name, email, date, time, dogs, puppy, senior, restype, doginfo){
    let newId = 1;
    if(lstReservations.length > 0){
        newId = lstReservations[lstReservations.length-1]._id + 1; //get the last id and add 1
    }
    let newUser = {_id:newId, name:name, email:email, date:date, time:time, dogs:dogs, puppy:puppy, senior:senior, restype:restype, doginfo:doginfo}; 
    lstReservations.push(newUser);
    return lstReservations;
}

exports.update = function(name, email, date, time, dogs, puppy, senior, restype, doginfo){
    let user = this.getById(uid);
    if(user != null){
        user.name = name;
        user.email = email;
        user.date = date;
        user.time = time;
        user.dogs = dogs;
        user.puppy = puppy;
        user.senior = senior;
        user.restype = restype;
        user.doginfo = doginfo;
    }
    return user;
}

exports.delete = function(uid){
    let idx = -1;
    for(let i=0; i<lstReservations.length; i++){
        if(lstReservations[i]._id === uid){
            idx = i;
            break;
        }
    }
    if(idx > -1){
        lstReservations.splice(idx, 1); //removes the element at index idx
        return true;
    } else {
        return false;
    }
}