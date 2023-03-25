import React from 'react'
import Navbar from '../components/Navbar'
import {RxCrossCircled} from 'react-icons/rx'
import './budget.css';
export default function Budget() {
    const remainingMoney = (x,y)=>{
        return(x - y);
    }
  return (
    <div className='budget-container'>
        <Navbar/>
        <center>
            <div className='budget-header'>
            <button onClick="" className='btn btn-dark button'>Add</button>
            </div>
        </center>

            {/* Manas  */}
        {/* <div>
            <div className='no-budget'><h1>No Budget</h1></div>
        </div> */}

        <div className='budget-list'>
            <div className='budget-heading'>
                <span>Name</span>
                <span>Budget</span>
                <span>Spent</span>
                <span>Remaning</span>
                <span></span>
            </div>
            <center><hr/></center>
            <div className='budget-item'>
                <span>Food</span>
                <span>1500</span>
                <span>680</span>
                <span>{remainingMoney(1500, 680)}</span>
                <span><button className='button btn'><RxCrossCircled size={30}/></button></span>
            </div>
            <center><hr/></center>

            <div className='budget-item'>
                <span>Travel</span>
                <span>5000</span>
                <span>1800</span>
                <span>{remainingMoney(5000, 1800)}</span>
                <span><button className='button btn'><RxCrossCircled size={30}/></button></span>
            </div>
            <center><hr/></center>

            {/* (Manas) Sample Data to repeate this */}

        </div>


    </div>
  )
}
