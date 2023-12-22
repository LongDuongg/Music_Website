import React from 'react'
import { BsSearch } from 'react-icons/bs'
import Album from '../components/Album'
import Artist from '../components/Artist'
import { Link } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'

const Search = () => {
  return (
    <>
      <div className="col-6">
        <div class="input-group">
  <input type="text" className="form-control py-2 rouned-pill" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2"
  />
  <span className="input-group-text p-3" id="basic-addon2"><BsSearch className='fs.6'/></span>
</div>
        </div>
        <div className="col-12 mt-4">
                    <h3 className="section-heading text-white">Songs</h3>

                    <table class="table table-dark table-hover">
                      <thead>
                        <tr>
                          <th scope="col" className='col-1'></th>
                          <th scope="col" className='col-8'>Title</th>
                          <th scope="col" className='col-2'>Genre</th>
                          <th scope="col" className='col-1'>Duration</th>
                          
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <Link to='/song' className='play-button fw-bold text-center text-decoration-none'
                              style={{ color: "#1ed760" }}>

                              <FaPlay className='h-100' />
                            </Link>
                          </th>
                          <td>
                            <Link to='/song' className='text-white text-decoration-none'>What Was I Made For...</Link>
                          </td>
                          <td>Alternative pop</td>
                          <td>3:41</td>
                          
                        </tr>
                        <tr>
                          <th scope="row">
                            <Link to='/song' className='play-button fw-bold text-center text-decoration-none'
                              style={{ color: "#1ed760" }}>

                              <FaPlay className='h-100' />
                            </Link>
                          </th>
                          <td><Link to='/song' className='text-white text-decoration-none'>lovely</Link></td>
                          <td>Pop</td>
                          <td>2:45</td>
                          
                        </tr>
                        <tr>
                          <th scope="row">
                            <Link to='/song' className='play-button fw-bold text-center text-decoration-none'
                              style={{ color: "#1ed760" }}>

                              <FaPlay className='h-100' />
                            </Link>
                          </th>
                          <td><Link to='/song' className='text-white text-decoration-none'>Ocean eyes</Link></td>
                          <td>Alternative pop</td>
                          <td>3:20</td>
                          
                        </tr>
                      </tbody>
                    </table>

                  </div>
        <div className="row mt-4">
            <div className="col-12">
              <h3 className="section-heading text-white">Album</h3>
            </div>
              <Album/>
              <Album/>
              <Album/>
              <Album/>
              <Album/>
              <Album/>
            
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <h3 className="section-heading text-white">Artist</h3>
            </div>
              <Artist/>
              <Artist/>
              <Artist/>
              <Artist/>
              <Artist/>
              <Artist/>
            
          </div>
    </>
  )
}

export default Search