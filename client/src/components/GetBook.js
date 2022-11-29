import '../App.css';

export default function GetBooks(props) {

    return (
        <form action='books' className='getBtnDiv'>
            <button type='submit' id='getBtn' className='btn'>See Books</button>
        </form>
    );
}
