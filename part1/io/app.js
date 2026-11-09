/*
Type	                  Meaning
Synchronous	              Executes one operation at a time and blocks until completion.
Asynchronous (Callback)	  Executes without blocking, using callbacks.
Asynchronous (Promise)	  Executes without blocking, using Promises and async/await.
*/


// Creating and writing a file -- synchronous
const fs = require("fs");

fs.writeFileSync("data.txt", "Hello JavaScript!");
console.log("File created successfully");


// Creating and writing a file -- asynchronous
const fs = require("fs");

fs.writeFile("data.txt", "Hello Node.js!", (err) => 
{
    if (err) 
    {
        console.log(err);
        return;
    }

    console.log("File written successfully");
})


// Reading -- synchronous
const data = fs.readFileSync("data.txt", "utf8");
console.log(data);


// Reading -- asynchronous
fs.readFile("data.txt", "utf8", (err, data) => 
{
    if (err) 
    {
        console.log(err);
        return;
    }

    console.log(data);
});