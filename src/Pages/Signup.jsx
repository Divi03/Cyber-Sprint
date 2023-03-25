import React, { Component } from 'react'
import './signup.css'
import Navbar from'../components/Navbar'

export default class SignUp extends Component {
  render() {
    return (
      <>
    <Navbar/>  
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              />
          </div>
          <div className="form-group mt-3">
            <label>FanPay Id</label>
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
            <a href="./login" className="btn btn-dark">Sign Up</a>
          </div>
        </div>
      </form>
    </div>
</>
    )
  }
}