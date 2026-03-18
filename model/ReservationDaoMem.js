// ReservationDaoMem.js

let lstReservations = [
    {_id:1,name:'Loren Kim', email:'lkim1@loyola.edu', date:'2026-03-20', time:'10:00', dogs:2, puppy:false, senior:false, restype:'walker', doginfo:'Peyote (6 yrs), Violet (7 yrs)'},
    {_id:2,name:'Ellen Salovaara', email:'ellen@loyola.edu', date:'2026-01-30', time:'11:00', dogs:1, puppy:true, senior:false, restype:'trainer', doginfo:'I want Luna to be trained to do tricks'},
    {_id:3,name:'Braden Kletz', email:'braden@loyola.edu', date:'2026-02-11', time:'09:00', dogs:1, puppy:false, senior:true, restype:'daycare', doginfo:'My dog (Max) is a senior and needs to be watched during the day'},
    {_id:4,name:'Andrew Szalczyk', email:'andrew@loyola.edu', date:'2026-02-24', time:'14:00', dogs:3, puppy:false, senior:false, restype:'trainer', doginfo:'My 3 chihuahuas need to stop biting people. Train them.'},
    {_id:5,name:'Gobi Hernandez', email:'gobi@loyola.edu', date:'2026-03-02', time:'19:00', dogs:4, puppy:true, senior:true, restype:'walker', doginfo:'Jax, Skylar, Pyro, and Storm all love to walk and sniff, Jax is older and walks slower'}
];

exports.readAll = function(){
    return lstReservations;
}

exports.read = function(uid){
    let reservation = null;
    for(let i=0; i<lstReservations.length; i++){ 
        if(lstReservations[i]._id === uid ){ 
            reservation = lstReservations[i]; 
            break;
        }
    }
    return reservation;
}

exports.create = function(reservation){
    //Generating ID by ourselves, take the last item in the array and adds 1 to their id
    let genId = lstReservations[ lstReservations.length -1 ]._id +1;
    //The ID generation above is just for the current memory array example.
    //DO NOT try to generate ids yourself when using a database.

    reservation._id = genId;

    lstReservations.push( reservation ); //adds to the array (manual insertion)
    //DO NOT do this when using a database
    
    return reservation;
}

exports.update = function(reservation){
    let pos = -1;
    for(let i=0; i<lstReservations.length; i++){
        if( lstReservations[i]._id === reservation._id ){
            pos = i; // saves the array position of the item to update
        }
    }

    if(pos >= 0 && pos < lstReservations.length){
        lstReservations[pos] = reservation;
    }
}

exports.del = function(uid){
    let reservation = null;
    let pos = -1;
    for(let i=0; i<lstReservations.length; i++){
        if( lstReservations[i]._id === uid ){
            pos = i; // saves the array position of the item to delete
        }
    }

    if(pos >= 0 && pos < lstReservations.length){
        reservation = lstReservations[pos];
        lstReservations.splice(pos,1);
    }

    return reservation;
}
