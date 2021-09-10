const http = require('http');

const port = process.env.PORT || 3000; 
// whatever is in the environment variable PORT or 3000, if nothing is there: 
// https://stackoverflow.com/questions/18864677/what-is-process-env-port-in-node-js


// creating the server here:
const myServer = http.createServer((req, resp)=>{
    // console.log(req); // printing the whole request

    resp.statusCode = 200; // HTTP response status code
    resp.setHeader('Content-Type', 'text/html'); 
    // specifying that content will be served in HTML form

    resp.end('<h1> This is my first HTTP server with Node Js !!</h1>');

});

// listening from the server:
myServer.listen(port, ()=>{
    console.log(`Server is listening on port! ${port}`);
}); 



