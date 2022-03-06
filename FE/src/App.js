import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Detail from './pages/Detail';
import Checkout from './pages/Checkout';
import Footer from './components/Footer';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/details/:id' element={<Detail/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/sign-up' element={<SignUp/>}></Route>
        <Route path='/sign-in' element={<SignIn/>}></Route>
        <Route path='/reset-password' element={<ResetPassword/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;