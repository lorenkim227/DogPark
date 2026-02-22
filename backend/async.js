const fs = require('fs'); // File system

// Code 1
console.log('Initiating...'); 

// I/O - Asynchronous function to read file
fs.readFile("node.txt", 
   function(err,content){// callback function after reading
      if(err) return console.error(err); 
      console.log(content.toString()); //code 2 – I/O Result
});

// Code 3
console.log('Finished.'); 
