const express = require("express");
const router = express.Router();
const User = require('../models/user');


router.post("/addUser", function(req, res) {

    const NEW_USER = new User({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        male: req.body.male,
    })

    NEW_USER.save(function(err, user) {        
        if (err) return res.status(500).send("Somthing went wrong!" + err);
        return res.json({
            user,
            message: "User added successfully"
        })
    })

});






module.exports = router;