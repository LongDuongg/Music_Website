import React, {useState, useContext, useEffect} from 'react'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import Fileupload from '../components/Fileupload'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Input } from 'antd';
import { Select, Space } from 'antd';
import type { SelectProps } from 'antd';
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
   
  ];
  
  const options: SelectProps['options'] = genres.map(genre => ({
    label: genre,
    value: genre.toLowerCase().replace(/\s/g, '-'),
  }));
  

  function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  
const Editsong = () => {
  const query = useQuery()
  const songId = query.get("id")

  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('');

  useEffect(() => {
    const fetchSong = async () => {
      const song = await fetch("/song/select_song", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          id: songId,
        }),
      })
        .then((response) => response.json())

      console.log("song", song)
      if (song) {
        setTitle(song.title)
        setArtist(song.artist)
        setGenre(song.genre)
      }
        
    }

    fetchSong()
  }, [songId])


  const handleChange = (value) => {
    console.log(`Selected genres: ${value}`);
    setGenre(value)
  };

  return (
    <>
      <div className="container-xxl">
        <div className="d-flex">
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
              
              <Link 
                to='/libraries'
                className='border-0 px-3 py-2 fw-bold w-100 rounded-pill mt-2 text-dark text-center text-decoration-none' 
                style={{background: "#1ed760"}} 
                type="submit"
                onClick={async (e) => {
                  e.preventDefault();
                  const id = parseInt(songId)
                  await songApi.editSong({id, title, artist, genre})
                  console.log(typeof id);
                  setTitle('');
                  setArtist('');
                  setGenre('');
                }}
              >
                Save
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Editsong

