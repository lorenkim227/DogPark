let lstUsers = [
    {_id:1,name:'Henrique Rocha', login:'hsrocha@loyola.edu', password:'123456',permission:1},
    {_id:2,name:'John Doe', login:'jd@aol.com', password:'123456', permission:2},
    {_id:3,name:'Jane Doe', login:'janed@compuserve.com', password:'123456', permission:2}
];

exports.readAll = function(){
    return lstUsers;
}

exports.read = function(uid){
    let user = null;
    for(let i=0; i<lstUsers.length; i++){
        if( lstUsers[i]._id === uid ){
            user = lstUsers[i];
            break;
        }
    }
    return user;
}

exports.create = function(user){
        //Generating ID by ourselves, take the last item in the array and adds 1 to their id
        let genId = lstUsers[ lstUsers.length -1 ]._id +1;
        //The ID generation above is just for the current memory array example.
        //DO NOT try to generate ids yourself when using a database.

        user._id = genId;

        lstUsers.push( user ); //adds to the array (manual insertion)
        //DO NOT do this when using a database
        
        return user;
}

exports.update = function(user){
    let pos = -1;
    for(let i=0; i<lstUsers.length; i++){
        if( lstUsers[i]._id === user._id ){
            pos = i; // saves the array position of the item to update
        }
    }

    if(pos >= 0 && pos < lstUsers.length){
        lstUsers[pos] = user;
    }
}

exports.del = function(uid){
    let user = null;
    let pos = -1;
    for(let i=0; i<lstUsers.length; i++){
        if( lstUsers[i]._id === uid ){
            pos = i; // saves the array position of the item to delete
        }
    }

    if(pos >= 0 && pos < lstUsers.length){
        user = lstUsers[pos];
        lstUsers.splice(pos,1);
    }
    
    return user;
}