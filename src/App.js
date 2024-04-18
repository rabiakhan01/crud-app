import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login/index.js';
import AddUser from './pages/AddUser/index.js';
import Listing from './pages/Listing/index.js';
import SignUp from './pages/Signup/index.js';
import './index.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/add-new-user' element={<AddUser />} />
        <Route path='/user-listing' element={<Listing />} />
        <Route path='/update-user/:id' element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
