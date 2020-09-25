const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Contact = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        min: 6,
        max:255
    },
    number:{
        type: String,
        required: true,
        max:10
    }
});

module.exports = mongoose.model('Contact', Contact);