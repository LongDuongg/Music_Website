import React, {useState} from 'react'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import Fileupload from '../components/Fileupload'
import { Link, useNavigate } from 'react-router-dom'
import { Input } from 'antd';
import { Select, Space } from 'antd';
import type { SelectProps } from 'antd';


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
   
  ];
  
  const options: SelectProps['options'] = genres.map(genre => ({
    label: genre,
    value: genre.toLowerCase().replace(/\s/g, '-'),
  }));
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e);
  };
  
  const { TextArea } = Input;
  
  
const Editsong = () => {
    
  const [title, setTitle] = useState();
  const [artist, setArtist] = useState();
  const [genre, setGenre] = useState();
  
  const handleChange = (value: string[]) => {
    console.log(`Selected genres: ${value}`);
    setGenre(value)
  };

  // console.log(songID.get());

  return (
    <>
      <div className="container-xxl">
        <div className="d-flex">
          <div className="col-4  me-3">
            <img src="https://t4.ftcdn.net/jpg/03/04/21/87/360_F_304218763_7okpFT8qUvZvRADsO1ACezQMJnt0AFQ7.jpg"
            className='w-100'
            alt="" />
            <button className='secondary-button py-3 my-3 rounded-pill bg-black'>Upload Cover</button>
          </div>
          <div className="col-8">
            <form action="">
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
                  allowClear
                  style={{ width: '100%', cursor: "pointer" }}
                  placeholder="Genre"
                  value={genre}
                  onChange={handleChange}
                  options={options}
                />
              </div>
            </form>
            
            <div className="d-flex my-4 align-items-center">
              <div className="col-3 pe-2">
              <Link to='/libraries'className='border-0 px-3 py-2 fw-bold w-100 rounded-pill mt-2 text-center text-decoration-none' style={{color: "#1ed760"}} data-dismiss="modal">Cancel</Link>
              </div>
              
              <Link to='/libraries'className='border-0 px-3 py-2 fw-bold w-100 rounded-pill mt-2 text-dark text-center text-decoration-none' style={{background: "#1ed760"}} type="submit">Upload</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Editsong