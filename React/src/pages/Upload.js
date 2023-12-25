import React, {useState} from 'react'
import Fileupload from '../components/Fileupload'
import { Link, useNavigate } from 'react-router-dom'
import { Input } from 'antd';
import { Select } from 'antd';
import { SelectProps } from 'antd';

import { songApi } from '../api/mock-api';

const genres = [
  'Pop',
  'Rock',
  'Hip Hop',
  'Electronic',
  'Classical',
  'Jazz',
  'R&B',
  'Country',
  'Reggae',
  'Metal',
  'Folk',
  'Rap'
   
  ];
  
  const options: SelectProps['options'] = genres.map(genre => ({
    label: genre,
    value: genre.toLowerCase().replace(/\s/g, '-'),
  }));
  

const Upload = () => {

  const [title, setTitle] = useState();
  const [artist, setArtist] = useState();
  const [url, setUrl] = useState();
  const [release_date, setRelease_date] = useState();
  const [genre, setGenre] = useState();

  const navigate = useNavigate()

  const handleChange = (value: string[]) => {
    console.log(`Selected genres: ${value}`);
    setGenre(value)
  };

  return (
    <>
      <div className="container-xxl">
        <div className="d-flex">
          {/* <div className="col-3  me-3">
              <img src="https://t4.ftcdn.net/jpg/03/04/21/87/360_F_304218763_7okpFT8qUvZvRADsO1ACezQMJnt0AFQ7.jpg"
              className='w-100'
              alt="" />
              <button className='secondary-button py-3 my-3 rounded-pill bg-black'>Upload Cover</button>
          </div> */}
          <div className="col-7">
            <form action="">
              {/* <Fileupload/> */}

              <div className="custom-input py-3">
                  <h5 className='text-white'>Song title</h5>
                  <Input placeholder="Enter song title" allowClear value={title} onChange={(e) => setTitle(e.target.value)}/>
              </div>
              
              <div className="custom-input py-3">
                <h5 className='text-white'>Artist</h5>
                <Input placeholder="Enter artist's name" allowClear value={artist} onChange={(e) => setArtist(e.target.value)}/>
              </div>
              
              <div className="custom-input py-3">
                <h5 className='text-white' >Genre</h5>
                <Select
                  // mode="multiple"
                  allowClear
                  style={{ width: '100%', cursor: "pointer" }}
                  placeholder="Genre"
                  value={genre}
                  onChange={handleChange}
                  options={options}
                />
              </div>

              <div className="custom-input py-3">
                <h5 className='text-white'>Url</h5>
                <Input placeholder="Enter Url" allowClear value={url} onChange={(e) => setUrl(e.target.value)}/>
              </div>
              
              <div className="custom-input py-3">
                <h5 className="text-white">Release Date</h5>
                <Input placeholder="Date" allowClear value={release_date} onChange={(e) => setRelease_date(e.target.value)} />
              </div>
                
            </form>

            <div className="d-flex py-3">
              <div className="col-3 pe-2">
                <Link to='/libraries'className='border-0 px-3 py-2 fw-bold w-100 rounded-pill mt-2 text-center text-decoration-none' style={{color: "#1ed760"}} type="submit">Cancel</Link>
              </div>
              <Link to=''>
                <button 
                  className='border-0 px-3 py-2 fw-bold w-100 rounded-pill mt-2 text-dark text-center text-decoration-none' 
                  style={{background: "#1ed760"}} 
                  type="submit"
                  onClick={async (e) => {
                    e.preventDefault()
                    await songApi.addSong({title, artist, url, release_date, genre})
                    setTitle('')
                    setArtist('')
                    setUrl('')
                    setGenre('')
                    setRelease_date('')
                    navigate("/album-detail")
                  }}
                >
                  Upload
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Upload