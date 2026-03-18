const fs = require('fs'); // File system

// Code 1
console.log("Initializing...");

// IO
fs.readFile("node.txt", function(err,content){
    if (err) return console.error(err);
    
    // Code 2 - IO result
    console.log(content.toString()); 
});



// Code 3
console.log('Finished');
