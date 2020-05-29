const User = require('../models/user');


// const NEW_USER = new User({
//     firstName: "Sina",
//     lastName: "Asadi",
//     username: "SinaAsadi",
//     age: 23,
//     male: true
// });

// NEW_USER.save(function(err, newUser) {
//     if (err) console.log(err);
//     else console.log(newUser);
// });





User.find({}, function(err, users) {
    if (err) console.log(err);
    else console.log(users[0].id);
});





module.exports;

