import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlay } from "react-icons/fa";


const Album = () => {
  return (
    <div className="col-2">
        <Link className="album-card m-2" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            
                <div className="album-cover position-relative pb-2">
                    <img 
                        src="https://bizweb.dktcdn.net/100/411/628/products/tyler-the-creator-flower-boy-cover-1.jpg?v=1633695007520" 
                        alt="" 
                        style={{width: '100%'}}/>
                    <Link to='/'className='floatted-button position-absolute border-0 fw-bold rounded-pill text-dark text-center text-decoration-none'
                        style={{background: "#1ed760"}}>
              
                        <FaPlay className='h-100'/>
                    </Link>
                </div>
                <div className="album-detail">
                    <Link className="album-title" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <h4 className='text-white pb-0 mb-0'>Flower boy</h4>
                    </Link>
                    <Link className="artist" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <p className='text-secondary'>Tyler, The Creator</p>
                    </Link>
                </div>
    
                
       
            
        </Link>
    
    </div>
  )
}

export default Album