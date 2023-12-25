import React from 'react'
import Album from '../components/Album'
import { Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { FaPlay } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoAddCircle } from "react-icons/io5";


const Profile = () => {
  return (
    <>
      <section className="profile-cover home-wrapper-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 ">
              <div className="cover-img position-relative">
                <img src="https://yt3.googleusercontent.com/63giC-V_Ovv-skWtQJU3v4pw2-jxZpjWdgpuO6EerTiUHGu5XLYriLoKjtjQrNawA_JMif276A=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
                  className='img-fluid w-100'
                  alt="" />
                <div className="profile-img position-absolute d-flex align-items-center">
                  <img src="https://yt3.googleusercontent.com/ytc/AIf8zZRaDMm7rEPlVfdI3IS_ruwq8W_KxuCuW7f4zdupGQ=s176-c-k-c0x00ffffff-no-rj"
                    className='rounded-circle'
                    alt="" />
                  <div className="profile-detail ps-4">
                    <h2 className="text-white fw-bold">Billie Eilish</h2>

                  </div>
                </div>
              </div>

            </div>
            <section className='all-songs'>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <h3 className="section-heading text-white">All songs</h3>

                    <table class="table table-dark table-hover">
                      <thead>
                        <tr>
                          <th scope="col"></th>
                          <th scope="col">Title</th>
                          <th scope="col">Genre</th>
                          <th scope="col">Duration</th>
                          <th scope="col">Actions</th>
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
                          <td>
                            <DeleteOutlined />
                          </td>
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
                          <td>
                            <DeleteOutlined />
                          </td>
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
                          <td>
                            <DeleteOutlined />
                          </td>
                        </tr>
                      </tbody>
                    </table>

                  </div>
                </div>
              </div>
            </section>
            <section className="album py-2 home-wrapper-2">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 d-flex gap-2">
                    <h3 className="section-heading text-white">Album</h3>
                    <Link className="">
          <IoAddCircle className='text-white fs-2'/>
        </Link>
                  </div>
                  <Album />
                  <Album />
                  <Album />
                  <Album />
                  <Album />
                  <Album />

                </div>
              </div>
            </section>
          </div>
        </div>

      </section>
    </>
  )
}

export default Profile