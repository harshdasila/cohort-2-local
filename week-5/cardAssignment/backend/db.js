const mongoose = require('mongoose')
mongoose.connect('ur-mongo-url')

const CardSchema = mongoose.Schema({
    fName: String,
    description: String,
    interests: String
})


const CardData = mongoose.model('Card',CardSchema);

module.exports = {
    CardData
}
