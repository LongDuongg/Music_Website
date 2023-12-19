import React from 'react'
import Custominput from '../components/Custominput'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div className="py-5" style={{background: "#000000", minHeight: "100vh"}}>
      <br/>
      <br/>
      <br/>
      <br/>

      <div className="my-5 w-25 rounded-3 mx-auto p-4" style={{background: "#121212"}}>
        <h3 className='text-center text-white'>Sign up</h3>
        <p className='text-center text-secondary'>to start listening</p>
        <form action="">
          <Custominput type='text' label="Username" id="username"/>
          <Custominput type='text' label="Email Address" id="email"/>
          <Custominput type='password' label="New password" id="pass"/>
          <Custominput type='password' label="Confirm password" id="confirmpass"/>
          <button className='border-0 px-3 py-2 fw-bold w-100 rounded-pill mt-2' style={{background: "#1ed760"}} type="submit">Sign Up</button>
          <Link to='/login' className="d-flex justify-content-center text-secondary mt-2">Login</Link>
        </form>
 
      </div>
    </div>
  )
}

export default Signup