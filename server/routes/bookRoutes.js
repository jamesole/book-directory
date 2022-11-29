const express = require('express');
const router = express.Router();
const { getBook, editBook, deleteBook, createBook } = require('../controller/bookRoutes');



router.route('/').get(getBook);
router.route('/').put(editBook);
router.route('/:id').delete(deleteBook);
router.route('/').post(createBook);

module.exports = router;
