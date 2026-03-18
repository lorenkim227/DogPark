let lstUsers = [
    {_id:1,name:'Henrique Rocha', login:'hsrocha@loyola.edu', password:'123456',permission:1},
    {_id:2,name:'John Doe', login:'jd@aol.com', password:'123456', permission:2},
    {_id:3,name:'Jane Doe', login:'janed@compuserve.com', password:'123456', permission:2}
];

exports.realAll = function(){
    return lstUsers;
}

exports.read = function(uid){
    let user = null;
    for(let i=0; i<lstUsers.length; i++){ 
        if(lstUsers[i]._id === uid ){ 
            user = lstUsers[i]; 
            break;
        }
    }
    return user;
}

// generated

exports.getById = function(uid){
    let user = null;
    for(let i=0; i<lstUsers.length; i++){ //search for the user with the requested ID
        if(lstUsers[i]._id === uid ){ // found ID match
            user = lstUsers[i]; 
            break;
        }
    }
    return user;
}

exports.create = function(name, login, password, permission){
    let newId = 1;
    if(lstUsers.length > 0){
        newId = lstUsers[lstUsers.length-1]._id + 1; //get the last id and add 1
    }
    let newUser = {_id:newId, name:name, login:login, password:password, permission:permission};
    lstUsers.push(newUser);
    return newUser;
}

exports.update = function(uid, name, login, password, permission){
    let user = this.getById(uid);
    if(user != null){
        user.name = name;
        user.login = login;
        user.password = password;
        user.permission = permission;
    }
    return user;
}

exports.delete = function(uid){
    let idx = -1;
    for(let i=0; i<lstUsers.length; i++){
        if(lstUsers[i]._id === uid){
            idx = i;
            break;
        }
    }
    if(idx > -1){
        lstUsers.splice(idx, 1); //removes the element at index idx
        return true;
    } else {
        return false;
    }
}