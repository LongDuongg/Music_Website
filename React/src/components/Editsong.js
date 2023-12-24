import React from 'react'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import Fileupload from '../components/Fileupload'
import { Link } from 'react-router-dom'
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
  
  const handleChange = (value: string[]) => {
    console.log(`Selected genres: ${value}`);
  };
const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e);
  };

const { TextArea } = Input;


const Editsong = () => {
  return (
    <>
       
<button type="button" className="border-0 text-white" style={{background:'transparent'}} data-toggle="modal" data-target="#exampleModalCenter">
<EditOutlined />
</button>


<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document" >
    <div class="modal-content" style={{background:'black', border:'solid 2px #212121',borderRadius:'20px' }}>
      
      <div class="modal-body" >
      <div className="container-xxl col-12 mt-4">
            
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
                            <Input placeholder="Enter song title" allowClear onChange={onChange} allowClear/>
                        </div>
                        
                        
                        <div className="custom-input py-3">
                        <h5 className='text-white'>Genre</h5>
                        <Select
                            mode="multiple"
                            allowClear
                            style={{ width: '100%' }}
                            placeholder="Genre"
                            onChange={handleChange}
                            options={options}
                            
                        />
                        </div>
                        
                        <div className="custom-input py-3">
                            <h5 className="text-white">Description</h5>
                        <TextArea rows={4} placeholder="Describe your song" maxLength={6} />
                        </div>
                        
                    </form>
                    <div className="d-flex my-4 align-items-center">
                        <div className="col-3 pe-2">
                        <Link to=''className='border-0 px-3 py-2 fw-bold w-100 rounded-pill mt-2 text-center text-decoration-none' style={{color: "#1ed760"}} data-dismiss="modal">Cancel</Link>
                        </div>
                        
                        <Link to=''className='border-0 px-3 py-2 fw-bold w-100 rounded-pill mt-2 text-dark text-center text-decoration-none' style={{background: "#1ed760"}} type="submit">Upload</Link>

                    </div>
                      
                </div>
            </div>
        </div>
      </div>
      
    </div>
  </div>
</div>
    </>
  )
}

export default Editsong