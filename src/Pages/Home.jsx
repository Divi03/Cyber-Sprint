import React from 'react'
import Navbar from '../components/Navbar'
import { FaUserCircle } from 'react-icons/fa'
import './home.css';

export default function home() {
  return (
    <div className='home-container'>
      <Navbar/>

      <div className='top-content'>
        <div className='image-title'>
          {/* Avatar */}
          <img src="" alt="" srcset="" />
          <FaUserCircle size={150} color='grey' fontSize='small'/>

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
        <span>wallet1</span>
        <span>wallet2</span>
        <span>wallet3</span>
        <span>wallet4</span>
      </div>


    </div>
  )
}
