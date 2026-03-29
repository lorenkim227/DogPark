// server.js
require('dotenv').config(); 

const dbcon = require('./model/DbConnection');
dbcon.connect(); 


const expApp = require('./app.js');

// Creates a server an make it listen in hostname:port
const server=expApp.app.listen(process.env.PORT,process.env.HOSTNAME,function(){
    console.log(`Server running in ${process.env.HOSTNAME}:${process.env.PORT}`);
});
