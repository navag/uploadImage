const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    contentType:String,
    image:String,
    base64Img: String
});

module.exports = mongoose.model('Image', imageSchema);