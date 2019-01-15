const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const mysql = require('mysql');


//Set up our express app
const app = express();

//Connect to mongodb;
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost/jobApp', {useNewUrlParser: true});
mongoose.Promise = global.Promise;

//Set up body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Initialize routes
app.use('/api', require('./routes/api'));

app.use(express.static('./public'));

//Error handling middleware
app.use( (err, req, res, next) => {
    console.log(err.message);
    res.send({error: err.message});
})


//Listen to port
app.listen(process.env.port || 4000, function(){
    console.log('Listening on port... ');
});







// const http = require("http");
// const fs = require('fs');

// http.createServer(function(req, res){
//     const readstream = fs.createReadStream('./index.html');
//     res.writeHead(200,{'Content-type': 'text/html'});
//     readstream.pipe(res);
// }).listen(3000);



//Connect to mysql database
// const conn = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "job_search_demo"
// });

//Check if app is connected to the database
// conn.connect(function(err){
//     if(err) throw err;
//     console.log("Connected to SQL database");
// });

//fire the Controller
//routes(app, conn);