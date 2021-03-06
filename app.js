const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const usersRouter = require('./routers/users');
const path = require("path");
const mongoose = require("mongoose");


mongoose.connect(
    'mongodb://localhost:27017/Blog'
, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});




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


app.use('/users', usersRouter);






app.listen(3000);