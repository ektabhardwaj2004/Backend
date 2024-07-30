//console.log("hello it's me");//

const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  //res.setHeader('Content-Type', 'text/plain');// //THIS WILL PRINT THE ENITER HTML CODE//
  res.setHeader('Content-Type', 'text/html'); //THIA WILL PRINT THE CONTENT OF THE FILE//
  //res.end('Hello World');//
  res.end(`<!DOCTYPE html> 

<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="./index .css">
    </head>
    <body>
        <div class = "first">
            <div class = "inside">
               <h2>HELLO IT'S ME....<h2>
            </div>
        </div>
        
        <script></script>
    </body>
</html>`)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
