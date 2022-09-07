const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const monthSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    sum: {
        type: Number,
        required: true
    },
    details: {
        type: String,
        required: false
    }
}, { timestamps: true });

module.exports = mongoose.model('Month', monthSchema);