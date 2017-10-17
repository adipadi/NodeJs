//this file is a module 
const express = require('express'); //similar to import in java
const app = express();
const port = 3000;


//endpoint responding to localhost:3000/
app.get('/', (request, response) => response.send('Hello World'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); // Note the `` backticks is NOT the same as single quotes ''
});