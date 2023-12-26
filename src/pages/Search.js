import React from 'react'
import { BsSearch } from 'react-icons/bs'
import Album from '../components/Album'
import Artist from '../components/Artist'

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
        <div className="row mt-4">
            <div className="col-12">
              <h3 className="section-heading text-white">Recent searches</h3>
            </div>
              <Album/>
              <Artist/>
              <Album/>
              <Album/>
              <Album/>
              <Album/>
            
          </div>
    </>
  )
}

export default Search