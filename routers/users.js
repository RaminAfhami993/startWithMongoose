const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");


router.post("/login", function(req, res) {

    try {
        
        throw {
            message: "message",
            status: 400
        };

    } catch (err) {
        res.send(err);

    };



    // fs.readFile('text.txt', 'utf8', function(err, data) {
    //     if (err) {
    //         res.send("somthing went wrong!");
    //     } else {
    //         res.send(data)
    //     }
    // });
});


router.get("/dashboard", function(req, res) {
    res.render(path.join(__dirname, '../views/pages/dashboard.ejs'), {name: 1});
});






module.exports = router;