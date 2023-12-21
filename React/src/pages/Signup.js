import React, { useState }  from 'react'
import Custominput from '../components/Custominput'
import { Link, useNavigate  } from 'react-router-dom'
import { guestApi } from "../api/mock-api";


const Signup = () => {

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const [confirmedPass, setConfirmedPass] = useState();

  const navigate = useNavigate();

  return (
    <div className="py-5" style={{background: "#000000", minHeight: "100vh"}}>
      <br/>
      <br/>
      <br/>
      <br/>

      <div className="my-5 w-25 rounded-3 mx-auto p-4" style={{background: "#121212"}}>
        <h3 className='text-center text-white'>Sign up</h3>
        <p className='text-center text-secondary'>to start listening</p>
        <form action="" method='POST'>
          <Custominput type='text'  label="Username" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <Custominput type='text' label="Email Address" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <Custominput type='password' label="New password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          {/* <Custominput type='password' name="confirmpass" label="Confirm password" id="confirmpass" value={confirmedPass} onChange={(e) => setConfirmedPass(e.target.value)}/> */}
          <button 
            className='border-0 px-3 py-2 fw-bold w-100 rounded-pill mt-2' 
            style={{background: "#1ed760"}} 
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              guestApi.signUp({username, email, password});
              setUsername('')
              setEmail('')
              setPassword('')
              navigate("/login");
            }}
          >
            Sign Up
          </button>
          <Link to='/login' className="d-flex justify-content-center text-secondary mt-2">Login</Link>
        </form>
 
      </div>
    </div>
  )
}

export default Signup