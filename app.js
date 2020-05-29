const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const usersRouter = require('./routers/users');
const path = require("path");
const mongoose = require("mongoose");


mongoose.connect(
    'mongodb://localhost:27017/startWithMongoose'
, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



require('./tools/mongoClient');


console.log(path.join(__dirname, 'views'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use("/", express.static("public"));

app.use(bodyParser.urlencoded({
    'extended': 'true'
})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json


app.use('/auth', usersRouter);

console.log("after");

app.get("/", function (req, res) {
    console.log(1);
    res.send('a');
});


app.get("/.....", function (req, res) {

    parameter
    console.log(1);
    res.send('a');
});



app.listen(3000);