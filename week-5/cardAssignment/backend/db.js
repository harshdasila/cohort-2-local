const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://harshdasila5555:Harsh%406112@cluster0.muz5vq8.mongodb.net/Card')

const CardSchema = mongoose.Schema({
    fName: String,
    description: String,
    interests: String
})


const CardData = mongoose.model('Card',CardSchema);

module.exports = {
    CardData
}