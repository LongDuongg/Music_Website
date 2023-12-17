import React from 'react'
import Custominput from '../components/Custominput'
const Resetpassword = () => {
  return (
    <div className="py-5" style={{background: "#000000", minHeight: "100vh"}}>
      <br/>
      <br/>
      <br/>
      <br/>

      <div className="my-5 w-25 rounded-3 mx-auto p-4" style={{background: "#121212"}}>
        <h3 className='text-center text-white'>Reset Password</h3>
        <p className='text-center text-secondary'>Please enter your new password</p>
        <form action="">
        <Custominput type='password' label="New password" id="pass"/>
        <Custominput type='password' label="Confirm password" id="confirmpass"/>
        <button className='border-0 px-3 py-2 fw-bold w-100 rounded-pill' style={{background: "#1ed760"}} type="submit">Reset Password</button>
    </form>
 
      </div>
    </div>
  )
}

export default Resetpassword