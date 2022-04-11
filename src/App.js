import {Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import RequiredAuth from './components/RequiredAuth/RequiredAuth';
import Shipment from './components/Shipment/Shipment';
import Shop from './components/Shop/Shop';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="Apps">
      <Header></Header>
      <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='shop' element={<Shop></Shop>}></Route>
       <Route path='about' element={<AboutUs></AboutUs>}></Route>
       <Route path='orders' element={<Orders></Orders>}></Route>
       <Route path='inventory'element={
         <RequiredAuth>
           <Inventory></Inventory>
         </RequiredAuth>
       }></Route>
       <Route path='shipment'element={<RequiredAuth>
        <Shipment></Shipment>
       </RequiredAuth>} ></Route>
       <Route path='login'element={<Login></Login>}></Route>
       <Route path='signup'element={<SignUp></SignUp>}></Route>

      </Routes>

    </div>
  );
}

export default App;
