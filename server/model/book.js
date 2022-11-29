const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type:String,
        trim:true,
        required:true,
        lowercase:true,
    },
    author: {
        type:String,
        trim:true,
        required:true,
        lowercase:true,
    },
    plot: {
        type:String,
        trim:true,
        required:true,
        lowercase:true,
    },
    genre: {
        type:String,
        trim:true,
        required:true,
        lowercase:true,
    },
    rating: {
        type:Number,
        trim:true,
        required:true,
    }
}, {collection: 'books'})

module.exports = mongoose.model('Book', bookSchema);
