import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlay } from "react-icons/fa";


const Artist = () => {
  return (
    <div className="col-2">
        <Link to="/profile" className="album-card m-2" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <div className="artist-cover position-relative pb-2">
                <img 
                    src="https://i.scdn.co/image/ab676161000051748278b782cbb5a3963db88ada" 
                    alt="" 
                    style={{width: '100%'}}
                    className='rounded-circle'/>
                <Link to='/profile'className='floatted-button position-absolute border-0 fw-bold rounded-pill text-dark text-center text-decoration-none'
                    style={{background: "#1ed760"}}>
            
                    <FaPlay className='h-100'/>
                </Link>
            </div>
            <div className="album-detail">
                <Link className="artist" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <h4 className='text-white'>Tyler, The Creator</h4>
                </Link>
            </div>
            
        </Link>
    </div>
  )
}

export default Artist