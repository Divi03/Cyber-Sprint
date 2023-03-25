import React from 'react';
import Home from './Pages/Home';
// import Navbar from './components/Navbar'
import Demo from './Pages/Demo';
import {BrowserRouter , Route , Routes} from "react-router-dom";
import Login from './Pages/Login';

function App() {
  return (
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
    <Route exact path = '/' element={<Home/>} />
    <Route exact path = '/login' element={<Login/>} />
    <Route exact path = '/demo' element={<Demo/>} />

    </Routes>
    </BrowserRouter>
  );
}
export default App;
