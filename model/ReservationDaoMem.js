// ReservationDaoMem.js

const fs = require('fs');
const path = require('path');

let lstReservations = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../data/reservations.json'))
  );

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
