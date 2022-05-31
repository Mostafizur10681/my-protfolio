import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Navbar from './components/Pages/shared/Navbar';
import Footer from './components/Pages/shared/Footer';
import About from './components/Pages/About/About';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        {/* <Route path='/' element={<Home></Home>}></Route> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
