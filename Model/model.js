const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema and Model

const MarioCharSchema = new Schema({
    username: String,
    age : Number
});

const MarioChar = mongoose.model('MarioChar',MarioCharSchema);

module.exports = MarioChar;
