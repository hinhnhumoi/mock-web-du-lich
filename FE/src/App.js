import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Detail from './pages/Detail';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/details' element={<Detail/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
      </Routes>
    </div>
  );
}

export default App;