const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

var mysql = require('mysql');

// create a connection variable with the required details
var con = mysql.createConnection({
    host: "collegerecord.cnqek7zwaget.us-east-1.rds.amazonaws.com", // ip address of server running mysql
    user: "admin", // user name to your mysql database
    password: "ZxCv!234", // corresponding password
    database: "collegedatabase" // use the specified database
});

// make to connection to the database.
con.connect(function (err) {
    if (err) throw err;
    // if connection is successful
    console.log('connection successful');
});



app.get('/', (req, res) => {
    res.json('OK');
})

app.post('/', (req, res) => {
    
    var records = [
        [req.body.Name, req.body.Email, req.body.Level, req.body.Taken, req.body.Expectation]
    ];

    if (records[0][0] != null) {
        con.query("INSERT into CollegeData (Name,Email,Level,CourseTaken,Expectation) VALUES ?", [records], function (err, res, fields) {

            if (err) throw err;

            console.log(res);
        });
    } 
    res.json('Form recieved');


})