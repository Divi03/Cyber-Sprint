import React from 'react';
import Navbar from './components/Navbar'
import Home from './Pages/Home';
import Budget from './Pages/Budget';
import Demo from './Pages/Demo';
import {BrowserRouter , Route , Routes} from "react-router-dom";
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
  return (
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
      <Route exact path = '/' element={<Home/>} />
      <Route exact path = '/budget' element={<Budget/>} />

      <Route exact path = '/login' element={<Login/>} />
      <Route exact path = '/signup' element={<Signup/>} />

    </Routes>
    </BrowserRouter>
  );
}
export default App;
