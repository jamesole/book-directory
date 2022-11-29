const Book = require('../model/book');

const getBook = async(req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json({books: books})
    }
    catch(err) {
        console.log(err);
    }
}

const editBook = async(req, res) => {
    try {
        const book = await Book.updateOne({title: req.body.title})
    }
    catch(err) {
        console.log(err)
    }
}

const deleteBook = async(req, res) => {
    try {
        await Book.deleteOne({_id: req.params.id});
    }
    catch (err) {
        console.log(err)
    }
}

const createBook = async(req, res) => {
    try {
        await Book.create({
            title: req.body.title,
            author: req.body.author,
            plot: req.body.plot,
            genre: req.body.genre,
            rating: req.body.rating
        });
    }
    catch (err) {
        console.log(err);
    }
}


module.exports = {
    getBook,
    editBook,
    deleteBook,
    createBook
}
