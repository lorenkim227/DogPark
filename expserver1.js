let lstUsers = [
    {_id:1,name:'Henrique Rocha', login:'hsrocha@loyola.edu', password:'123456',permission:1},
    {_id:2,name:'John Doe', login:'jd@aol.com', password:'123456', permission:2},
    {_id:3,name:'Jane Doe', login:'janed@compuserve.com', password:'123456', permission:2}
];

let hostname = "localhost";
let port = 4000;

const express = require('express'); //imports express
const morgan = require('morgan'); //imports morgan

const app = express(); //creates a new Express Application


app.use(morgan('dev')); //For better logging, we use morgan
app.use( express.static('public_html') ); // Static page server will use the folder 'public_html'

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.get("/user",function(req,res){
    res.status(200); // Ok status
    res.send(lstUsers); // Sending the array
    res.end(); // Ends the response (optional but important)
});

app.get("/user/:uid",function(req,res){
    let uid = parseInt( req.params.uid ); //takes the URL parameter

    let user = null;
    for(let i=0; i<lstUsers.length; i++){ //search for the user with the requested ID
        if(lstUsers[i]._id === uid ){ // found ID match
            user = lstUsers[i]; 
            break;
        }
    }

    if(user != null){ // requested user exists
        res.status(200);
        res.send(user); //send the user data
    } else { // user id does not exists
        res.status(404);  // error
        res.send({msg:'User with this ID does not exists'});
    }
    res.end();
});

app.post("/user",function(req,res){

    let uname = req.body.txt_name; //always red.body.<inputName>
    let ulogin = req.body.txt_login;
    let upwd = req.body.txt_password;
    let uperm = 2; 
    if (req.body.txt_permission ){
        uperm = parseInt( req.body.txt_permission );
    }

    if(req.body.txt_id && req.body.txt_id !== ""){
        // update operation
        console.log("Update...");
        let uid = parseInt( req.body.txt_id);
        let pos = -1;
        for(let i=0; i<lstUsers.length; i++){
            if( lstUsers[i]._id === uid ){
                pos = i; // saves the array position of the item to delete
            }
        }

        if(pos >= 0 && pos < lstUsers.length){
            let newuser = {_id: uid, name: uname, login: ulogin, permission: uperm}; //creates a user object (like the ones we have on lstUsers array)
            lstUsers[pos] = newuser;
        }
        

    } else {
        // create/insert operation

        //Generating ID by ourselves, take the last item in the array and adds 1 to their id
        let uid = lstUsers[ lstUsers.length -1 ]._id +1;
        //The ID generation above is just for the current memory array example.
        //DO NOT try to generate ids yourself when using a database.

        let newuser = {_id: uid, name: uname, login: ulogin, permission: uperm}; //creates a user object (like the ones we have on lstUsers array)

        lstUsers.push( newuser ); //adds to the array (manual insertion)
        //DO NOT do this when using a database
    }

    res.redirect("userpage.html"); //redirects output to this webpage
});


app.get('/deleteuser/:uid',function(req,res){
    let uid = parseInt( req.params.uid ); //takes the URL parameter

    let pos = -1;
    for(let i=0; i<lstUsers.length; i++){
        if( lstUsers[i]._id === uid ){
            pos = i; // saves the array position of the item to delete
        }
    }

    if(pos >= 0 && pos < lstUsers.length){
        lstUsers.splice(pos,1);
    }

    res.redirect("../userpage.html")

});


const server = app.listen(port,hostname,function(){ // Asynchronous Listen to client requests in hostname:port
    console.log(`Server running on ${hostname}:${port}`); // Must be here due to the asynchronous nature of the app.listen()
});
