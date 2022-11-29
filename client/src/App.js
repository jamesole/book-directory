import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forms from './pages/Forms';
import Books from './pages/Books';
import GetBooks from './components/GetBooks';


export default function App(props) {
  return(
    <div>
      <div className='header'>
        <h4>Book Club</h4>
        <div>
          <h4>{props.user}</h4>
          <h5>Student</h5>
        </div>
      </div>

      <Router>
          <Routes>
            <Route path='/' element={<div><Forms /><GetBooks /></div>}/>
            <Route path='/books' element={<Books />}/>
          </Routes>
      </Router>
    </div>
  );
}
