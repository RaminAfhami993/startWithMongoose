const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CompanySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    address: String,
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    },
    level: {
        type: String,
        required: true,
        default: "C",
        enum: ['A', 'B', 'C']
    }
});


module.exports = mongoose.model('Company', CompanySchema);



