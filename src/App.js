import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ParlourList from './Components/ParlourList/ParlourList';
import ParlourDetail from './Components/ParlourDetail/ParlourDetail';
import Cart from './Components/Cart/Cart';
import { useEffect, useState } from 'react';


function App() {
  return (
 <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:city" element={<ParlourList/>} />
        <Route path="/:cityName/:Id" element={<ParlourDetail/>} />
        <Route path="/Cart" element={<Cart/>} />

      </Routes>
 </BrowserRouter>

  );
}

export default App;
