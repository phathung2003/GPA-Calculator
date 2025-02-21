import logo from './logo.svg';  // Importing the SVG file
import './App.css';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom'
import NavBar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './page/Home';
import About from './page/About';

function App() {
  return (
    <>

<NavBar/>


 <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />


  </Routes>


<Footer/>

    </>
  );
}

export default App;
