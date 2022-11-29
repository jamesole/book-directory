import React, {useState, useEffect} from "react";
import axios from 'axios';
import '../App.css';


export default function Books(props) {

    const [books, setBooks] = useState([]);

    async function fetchBooks() {
        const tempBooks = await axios.get('http://localhost:8000/book');
        setBooks(tempBooks.data.books);
    }

    useEffect(() => {
        fetchBooks();
    }, [])

    function deleteBook(e) {
        axios.delete(`http://localhost:8000/book/${e.target.value}`)
        window.location.reload();
    }

    const mappedTable = books.map((book) => {
        return (
            <tr>
                <td scope="row">{books.indexOf(book) + 1}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.plot}</td>
                <td>{book.genre}</td>
                <td>{book.rating}</td>
                <td><button className="deleteBtn" value={book._id} onClick={deleteBook}>Finished</button></td>
            </tr>
        );
    })

    return (
        <div>
            {(books.length !== 0) ? (<div className="middle"><h4 id="book-heading">Your Books: </h4><table className="table" id="tab">
                <thead>
                    <tr>
                        <th scope="col" className='heading'>#</th>
                        <th scope="col" className='heading'>Title</th>
                        <th scope="col" className='heading'>Author</th>
                        <th scope="col" className='heading'>Plot</th>
                        <th scope="col" className='heading'>Genre</th>
                        <th scope="col" className='heading'>Rating</th>
                        <th scope="col" className='heading'>Read?</th>
                    </tr>
                </thead>
                <tbody>
                    {mappedTable}
                </tbody>
            </table></div>) : <div className="middle"><h1 style={{color:'white', margin:'0 auto', marginTop:'75px'}}>You have no books, buddy!</h1></div>}
        </div>
    );
}
