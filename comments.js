//Create web server
const express = require('express');
const app = express();
//Use body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//Use the comments.js
const comments = require('./comments.js');
app.use('/comments', comments);

//Listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});