import React from 'react'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import Fileupload from '../components/Fileupload'
import { Link } from 'react-router-dom'
import { Input } from 'antd';
import { Select, Space } from 'antd';
import type { SelectProps } from 'antd';
import { RiSettings2Line } from "react-icons/ri";

  
 
  
const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e);
  };

const { TextArea } = Input;


const Editpofile = () => {
  return (
    <>
       
<button type="button" className="border-0 text-white fs-3" style={{background:'transparent'}} data-toggle="modal" data-target="#Editprofilemodal">
<RiSettings2Line />
</button>


<div class="modal fade" id="Editprofilemodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document" >
    <div class="modal-content" style={{background:'black', border:'solid 2px #212121',borderRadius:'20px' }}>
      
      <div class="modal-body" >
      <div className="container-xxl col-12 mt-4">
            
            <div className="d-flex">
                <div className="col-12">
                    <form action="">

                        <div className="custom-input py-3">
                            <h5 className='text-white'>Profile name</h5>
                            <Input placeholder="Enter profile name" allowClear onChange={onChange} allowClear/>
                        </div>
                        <div className="custom-input py-3">
                            <h5 className='text-white'>Email</h5>
                            <Input placeholder="Enter email" allowClear onChange={onChange} allowClear/>
                        </div>
                        <div className="custom-input py-3">
                            <h5 className='text-white'>Password</h5>
                            <Input.Password placeholder="Enter profile name" allowClear onChange={onChange} allowClear/>
                        </div>
                        <div className="custom-input py-3">
                            <h5 className='text-white'>Confirmpassword</h5>
                            <Input.Password placeholder="Enter profile name" allowClear onChange={onChange} allowClear/>
                        </div>
                        
                    </form>
                    <div className="d-flex my-4 align-items-center">
                        <div className="col-3 pe-2">
                        <Link to=''className='border-0 px-3 py-2 fw-bold w-100 rounded-pill mt-2 text-center text-decoration-none' style={{color: "#1ed760"}} data-dismiss="modal">Cancel</Link>
                        </div>
                        
                        <Link to=''className='border-0 px-3 py-2 fw-bold w-100 rounded-pill mt-2 text-dark text-center text-decoration-none' style={{background: "#1ed760"}} type="submit">Save</Link>

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

export default Editpofile