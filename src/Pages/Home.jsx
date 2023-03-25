import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Chart from '../components/chart';
import { BiUser } from 'react-icons/bi'
import './home.css';

export default function home() {
  return (
    <div className='home-container'>
      <Navbar/>

      <div className='top-content'>
        <div className='image-title'>
          {/* Avatar */}
          <img src="" alt="" srcset="" />
          <BiUser size={150} color='black'/>

          {/* Title */}
          <span>Business Man</span>
        </div>

      <div>
        <span>Balance : 120311.73</span>
        {/* Balance in Dark Grey color */}
      </div>
      </div>

      {/* wallet tabs */}

      <div className='wallet-list'>
        <div>
          <button onClick="" className='btn btn-dark'>wallet1</button>
          <button onClick="" className='btn btn-dark'>wallet1</button>
          <button onClick='' className='btn btn-dark'>wallet1</button>
          <button onClick='' className='btn btn-dark'>wallet1</button>
        </div>
      </div>


      {/* change accorging to click (Manas) */}
      <div className='visuals'>
        <Chart/> 
      </div>

    </div>
  )
}
