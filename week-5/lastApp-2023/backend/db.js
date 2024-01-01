require('dotenv').config();
const mongoose = require("mongoose");
const mongooseURL = process.env.mongooseURL;

mongoose.connect(mongooseURL)
const todoStructure = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todoSchema = mongoose.model('Todos',todoStructure);

module.exports = {
    todoSchema
}