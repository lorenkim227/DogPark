// server.js

const expApp = require('./app.js');
let hostname = 'localhost'; //address for this server
let port = 4000; //change the port if already in use

// Creates a server an make it listen in hostname:port
const server=expApp.app.listen(port,hostname,function(){
    console.log(`Server running in ${hostname}:${port}`);
});
