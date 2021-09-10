const http = require('http');

const port = process.env.PORT || 3000; 


const myServer = http.createServer((req, resp)=>{

    resp.statusCode = 200; 
    resp.setHeader('Content-Type', 'text/html'); 

    console.log(req.url);

    // sending content based on the URL
    if(req.url == '/'){ // the main page: http://localhost:3000/
        resp.statusCode = 200; 
        resp.end('<h1>Main Page</h1>');
    }
    else if(req.url == '/about'){ // the about page: http://localhost:3000/about
        resp.statusCode = 200; 
        resp.end('<h1>About Page</h1>');
    }
    else{
        resp.statusCode = 404; 
        // means if we try to open any other sub URL (other than mentioned above), it will show NOT FOUND
        resp.end('<h1>Page not found on this server!!</h1>');
    }

});

myServer.listen(port, ()=>{
    console.log(`Server is listening on port! ${port}`);
}); 



