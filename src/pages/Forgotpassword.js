import React from 'react'
import Custominput from '../components/Custominput'
import {Link} from 'react-router-dom';
const Forgotpassword = () => {
  return (
    <div className="py-5" style={{background: "#000000", minHeight: "100vh"}}>
      <br/>
      <br/>
      <br/>
      <br/>

      <div className="my-5 w-25 rounded-3 mx-auto p-4" style={{background: "#121212"}}>
        <h3 className='text-center text-white'>Forgot Password</h3>
        <p className='text-center text-secondary'>Please enter your email to get reset password mail</p>
        <form action="">
        <Custominput type='text' label="Email Address" id="email"/>
        
        <button className='border-0 px-3 py-2 fw-bold w-100 rounded-pill mt-2' style={{background: "#1ed760"}} type="submit">Submit</button>
        <Link to='/signup' className="d-flex justify-content-center text-secondary mt-2">Create new account</Link>
    </form>
 
      </div>
    </div>
  )
}

export default Forgotpassword