const express = require('express');
const server = express();
require('dotenv').config();
const cors = require('cors');
const bookRouter = require('./routes/bookRoutes');
const connectDB = require('./db/connect');

server.use(express.json());
server.use(cors());
server.use('/book', bookRouter);

const start = async() => {
    try {
        await connectDB(process.env.URL);
        server.listen(8000, () => {
            console.log('All is operational!');
        })
    }
    catch(error) {
        console.log(error)
    }
}

start()
