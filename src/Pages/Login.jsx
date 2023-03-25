// import React from 'react';
import Navbar from '../components/Navbar';
// import './login.css';

// export default function Login() {
//   return (
//     <div className='main-container'>
//     <Navbar/>

//     <div className='form-container'>
//       <form action="" className='form'>
//         <div>
//         <label htmlFor="email_input">Email</label>
//         <input type="email" id='email_imput'/>
//         </div>

//         <div>

//         <label htmlFor="password_input">Password</label>
//         <input type="password" id='password_input' />

//         </div>
//       </form>
//     </div>

//     </div>
//   )
// }


import React from "react"
import './login.css'

export default function (props) {
  return (
    <>
    <Navbar/>  
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            {/* Forgot <a href="#">password?</a> */}
          </p>
        </div>
      </form>
    </div>
</>
  )
}