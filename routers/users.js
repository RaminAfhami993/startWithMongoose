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
        if (err) return res.status(500).send("Somthing went wrong in add user \n!" + err);
        return res.json({
            user,
            message: "User added successfully"
        })
    })

});


router.get("/allUsers", (req, res) => {


    User.find({}, (err, users) => {
        if (err) return res.status(500).send("Somthing went wrong in get all users! \n" + err);
        return res.json(users)
    })
});


router.put("/updateUser/:userId", (req, res) => {
    console.log(req.params.userId);
    

    User.findByIdAndUpdate(req.params.userId, req.body, {new: true}, (err, user) => {
        if (err) return res.status(500).send("Somthing went wrong in update user! \n" + err);
        return res.json(user)
    })
});










module.exports = router;