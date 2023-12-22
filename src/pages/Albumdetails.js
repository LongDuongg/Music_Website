import React from 'react'
import { Link } from 'react-router-dom';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { FaPlay } from "react-icons/fa";
import Album from '../components/Album';
import TextArea from 'antd/es/input/TextArea';

const Albumdetails = () => {
    return (
        <>
            <section>
                <div className="container-fluid">
                    <div className="col-12">
                        <div className="row">
                            <div className=" col-5">
                                <img className='img-fluid w-100' src="https://bizweb.dktcdn.net/100/411/628/products/tyler-the-creator-flower-boy-cover-1.jpg?v=1633695007520" alt="" />
                                <div className="album-info text-white mt-4 d-flex justify-content-between">
                                    <div>
                                        <h3 className="">
                                            Flower Boy
                                        </h3>
                                        <div className="d-flex gap-1">
                                            <p className="">
                                                2019
                                            </p>
                                            &bull;
                                            <p className="">
                                                3 songs
                                            </p>
                                            &bull;
                                            <p className="">
                                                11min 42sec
                                            </p>

                                        </div>

                                    </div>
                                    <div className='d-flex gap-2 align-items-center'>
                                        <img src="https://i.scdn.co/image/ab676161000051748278b782cbb5a3963db88ada" alt="" className='rounded-pill' style={{ height: '60px' }} />
                                        <h4>Tyler, The Creator</h4>
                                    </div>
                                </div>
                                <div className="text-white mt-4 d-flex gap-3 align-items-center">
                                    <h4 className='d-flex'>Genres</h4>
                                    <div className="d-flex gap-1 ">
                                        <p>
                                            Rap
                                        </p>
                                        &bull;
                                        <p>
                                            Rap
                                        </p>
                                        &bull;
                                        <p>
                                            Rap
                                        </p>
                                        &bull;
                                        <p>
                                            Rap
                                        </p>

                                    </div>
                                </div>
                                <div className="text-white mt-4">
                                    <h4>Description</h4>
                                    <p>Flower Boy is the fourth studio album by American rapper Tyler, the Creator. The album was released on July 21, 2017, by Columbia Records.</p>
                                </div>
                                <div className="text-white mt-4">
                                    <h4>More about this artist</h4>
                                    <div className='d-flex row '>
                                        <Album />
                                        <Album />
                                        <Album />
                                        <Album />
                                        <Album />
                                        <Album />

                                    </div>
                                </div>
                            </div>
                            <div className="col-7">

                                <h4 className='text-white'>Songs</h4>
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
                            <EditOutlined />
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
                            <EditOutlined />
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
                            <EditOutlined />
                            <DeleteOutlined />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                                <div className="mt-4">
                                    <h4 className='text-white'>Comments</h4>
                                    <TextArea rows={3} placeholder="Leave your comment here" maxLength={4} />
                                    <div className="d-flex justify-content-end">
                                        <button className='border-0 px-3 py-2 fw-bold col-1 rounded-pill mt-2 text-center text-decoration-none bg-black' style={{ color: "#1ed760" }} type="submit">Cancel</button>
                                        <button className='border-0 px-3 py-2 fw-bold col-2 rounded-pill mt-2 text-dark text-center text-decoration-none' style={{ background: "#1ed760" }} type="submit">Comment</button>
                                    </div>
                                    <div className="comment border-top border-dark pt-3 mt-4">
                                        <div className='d-flex gap-2 align-items-center text-white'>
                                            <img src="https://i.scdn.co/image/ab676161000051748278b782cbb5a3963db88ada" alt="" className='rounded-pill' style={{ height: '40px' }} />
                                            <h6>Tyler, The Creator</h6>
                                        </div>
                                        <p className='mt-2 text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed debitis itaque ipsam. Rem sapiente, molestiae dolorem aliquid libero suscipit accusamus aliquam assumenda alias dolores cum illum quidem repudiandae odio cumque?</p>
                                    </div>
                                    <div className="comment border-top border-dark pt-3 mt-4">
                                        <div className='d-flex gap-2 align-items-center text-white'>
                                            <img src="https://i.scdn.co/image/ab676161000051748278b782cbb5a3963db88ada" alt="" className='rounded-pill' style={{ height: '40px' }} />
                                            <h6>Tyler, The Creator</h6>
                                        </div>
                                        <p className='mt-2 text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed debitis itaque ipsam. Rem sapiente, molestiae dolorem aliquid libero suscipit accusamus aliquam assumenda alias dolores cum illum quidem repudiandae odio cumque?</p>
                                    </div>
                                    <div className="comment border-top border-dark pt-3 mt-4">
                                        <div className='d-flex gap-2 align-items-center text-white'>
                                            <img src="https://i.scdn.co/image/ab676161000051748278b782cbb5a3963db88ada" alt="" className='rounded-pill' style={{ height: '40px' }} />
                                            <h6>Tyler, The Creator</h6>
                                        </div>
                                        <p className='mt-2 text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed debitis itaque ipsam. Rem sapiente, molestiae dolorem aliquid libero suscipit accusamus aliquam assumenda alias dolores cum illum quidem repudiandae odio cumque?</p>
                                    </div>
                                    <div className="comment border-top border-dark pt-3 mt-4">
                                        <div className='d-flex gap-2 align-items-center text-white'>
                                            <img src="https://i.scdn.co/image/ab676161000051748278b782cbb5a3963db88ada" alt="" className='rounded-pill' style={{ height: '40px' }} />
                                            <h6>Tyler, The Creator</h6>
                                        </div>
                                        <p className='mt-2 text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed debitis itaque ipsam. Rem sapiente, molestiae dolorem aliquid libero suscipit accusamus aliquam assumenda alias dolores cum illum quidem repudiandae odio cumque?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Albumdetails