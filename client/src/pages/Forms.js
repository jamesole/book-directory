import '../App.css';

import React, {useState} from 'react';
import axios from 'axios';

export default function Forms(props) {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [plot, setPlot] = useState('');
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState('');


    function changed(e) {
        switch(e.target.id) {
            case 'title':
                setTitle(e.target.value);
                break;
            case 'author':
                setAuthor(e.target.value);
                break;
            case 'plot':
                setPlot(e.target.value);
                break;
            case 'genre':
                setGenre(e.target.value);
                break;
            case 'rating':
                setRating(e.target.value);
                break;
            default:
                console.log('There was some error');
        }
    }

    function submitted(e) {
        e.preventDefault();
        const book = {
            title,
            author,
            plot,
            genre,
            rating
        }

        axios.post('http://localhost:8000/book', book);
        

        setTitle('');
        setAuthor('');
        setPlot('');
        setGenre('');
        setRating('');

    }





    return(
        <form onSubmit={submitted}>
            <h5>What's your Favorite Book?</h5>
            <div className="row">
                <div className="form-group col-md-6">
                    <label className='label'>Book Title</label>
                    <input type='text' id='title' className='form-control' placeholder='Percy Jackson' value={title} onChange={changed} required/>
                </div>
                <div className="form-group col-md-6">
                    <label className='label'>Book Author</label>
                    <input type='text' id='author' className='form-control' placeholder='Rick Riordan' value={author} onChange={changed} required />
                </div>
            </div>

            <div className='row'>
                <div className='form-group col-md-12'>
                    <label className='label'>Short Plot Description</label>
                    <textarea type='text' id='plot' className='form-control' value={plot} onChange={changed} required/> 
                </div>
            </div>

            <div className='row'>
                <div className='form-group col-md-6'>
                    <label className='label'>Genre</label>
                    <input type='text' id='genre' value={genre} onChange={changed} className='form-control'/> 
                </div>
                <div className='form-group col-md-6'>
                    <label className='label'>Rating (0-10)</label>
                    <input type='number' id='rating' className='form-control' value={rating} onChange={changed} min={0} max={10}/> 
                </div>
            </div>

            <button type='submit' id='btn' className='btn'>Submit</button>
        </form>
    );
}
