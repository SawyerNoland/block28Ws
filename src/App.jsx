import Blue from './components/blue';
import Red from './components/red';
import Home from './components/home';
import './App.css'
import { Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

function App() {


  return (
    <>
    <div id="container">
      <div id="navbar">
      <Link to={'/blue'}><button className='blue-button'>Blue</button></ Link>
      <Link to={'/red'}><button className='red-button'>Red</button></ Link> 
      <Link to={'/'}><button className='home-button'>Home</button></ Link></div>
      <div id="main-section">
        <Routes>
        <Route path='/blue' element={<Blue/>} />
        <Route path='/red' element={<Red/>}/>
        <Route path='/' element={<Home/>}/>
        </Routes></div>
    </div>
    </>
  )
}

export default App
