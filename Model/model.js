const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema and Model

const MarioCharSchema = new Schema({
    username: String,
    age : Number,
    date: { type: Date, default: Date.now() },
    deleted: { type: Boolean, default: false }

});

const MarioChar = mongoose.model('MarioChar',MarioCharSchema);

module.exports = MarioChar;
