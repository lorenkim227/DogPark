const http = require('http'); // Standard Node library
const fs = require('fs'); // File system


const server = http.createServer(function(request,response){ 
   // 200 = OK, Content-Type = HTML
   response.writeHead(200,{'Content-Type': 'text/html'}); 

   // Actual response in HTML
   response.write("<h1> Hello NodeJS World! </h1>");
   response.write("<h2> CS456 - Web Prog </h2>");

   fs.readFileSync("node.txt", function(err, content){
        if (err) return console.error(err);
        response.write(content);
        response.end();
   }); // Asynchronous read
   
}); 

server.listen(4000,'localhost'); // Runs on server
console.log("Server running on localhost:4000");