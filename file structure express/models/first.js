const mongo = require('mongoose');

const firstSchema = new mongo.Schema({
    name:{type:String}
});

const First = mongo.model("First", firstSchema);

module.exports = First;