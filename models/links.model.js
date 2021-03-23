const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const linksSchema = new Schema({
    shortLink: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 6
    },
    fullLink: {
        type: String,
        required: true,
        trim: true
    }
})

const Link = mongoose.model('Link', linksSchema);

module.exports = Link;