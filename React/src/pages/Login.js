import React, { useState, useContext } from 'react'
import Custominput from '../components/Custominput'
import { Link, useNavigate  } from 'react-router-dom'
import { guestApi } from "../api/mock-api";
import { Context } from '../context/GlobalContext';

const Login = () => {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const { signIn, loginUser } = useContext(Context);

  const navigate = useNavigate();

  return (
    <div className="py-5" style={{background: "#000000", minHeight: "100vh"}}>
      <br/>
      <br/>
      <br/>
      <br/>

      <div className="my-5 w-25 rounded-3 mx-auto p-4" style={{background: "#121212"}}>
        <h3 className='text-center text-white'>Login</h3>
        <p className='text-center text-secondary'>Login to your account to continue</p>
        <form action="">
        <Custominput type='text' label="Username" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <Custominput type='password' label="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        
        <button 
          className='border-0 px-3 py-2 fw-bold w-100 rounded-pill mt-2 text-dark text-center text-decoration-none' 
          style={{background: "#1ed760"}} 
          type="submit"
          onClick={async (e) => {
            e.preventDefault();
            await signIn({username, password})
            if(loginUser.get() === false) {
              alert("invalid username or password")
            } else {
              navigate("/");
            }
            setUsername('')
            setPassword('')
          }}
        >
          Login
        </button>
        <Link to='/signup' className="d-flex justify-content-center mt-2" style={{color:"#1ed760"}}>Signup</Link>
        <Link to='/forgot-password' className="d-flex justify-content-center text-secondary p-0">Forgot password?</Link>
    </form>
 
      </div>
    </div>
  )
}

export default Login