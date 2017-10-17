//this file is a module 
const express = require('express'); //similar to import in java
const morgan = require('morgan');
const bodyParser = require('body-parser');
const tvShowRouter = require('./tvShow/tvShowRouter');


const app = express();
const port = 3000;

//logging 
app.use(morgan('dev'));
//JSON handling
app.use(bodyParser.json());
//redirect calls to /tvshow to tvshowRouter module
app.use('/tvshow', tvShowRouter)

//endpoint responding to localhost:3000/
app.get('/', (request, response) => response.send('Hello World'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); // Note the `` backticks is NOT the same as single quotes ''
});

