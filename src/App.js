import {Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="Apps">
      <Header></Header>
      <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='shop' element={<Shop></Shop>}></Route>
       <Route path='about' element={<AboutUs></AboutUs>}></Route>
       <Route path='orders' element={<Orders></Orders>}></Route>
       <Route path='inventory'element={<Inventory></Inventory>}></Route>

      </Routes>

    </div>
  );
}

export default App;
