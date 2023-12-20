import React from 'react'
import Album from '../components/Album'
import { Table } from 'antd';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons'
import { FaPlay } from "react-icons/fa";
import { Link } from 'react-router-dom';

const dataSource = [
    {
      key: '1',
      title: 'Happier than ever',
      genre: 'Alternative pop',
      duration: '3:02',
    },
    {
      key: '2',
      title: 'What was I made for?',
      genre: 'Alternative pop',
      duration: '3:02',
    },
    {
        key: '3',
        title: 'What was I made for?',
        genre: 'Alternative pop',
        duration: '3:02',
      },
      {
        key: '4',
        title: 'What was I made for?',
        genre: 'Alternative pop',
        duration: '3:02',
      },
      {
        key: '5',
        title: 'What was I made for?',
        genre: 'Alternative pop',
        duration: '3:02',
      },
  ];
  
  const columns = [
    {
        dataIndex: 'play',
        key: 'play',
        render:()=>{
            return<>
                <Link to='/'className='play-button fw-bold text-center text-decoration-none'
                    style={{color:"#1ed760"}}>
              
                        <FaPlay className='h-100'/>
                    </Link>
            </>
        }
      },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Genre',
      dataIndex: 'genre',
      key: 'genre',
    },
    {
      title: 'Duration',
      dataIndex: 'duration',
      key: 'duration',
    },
    {
        title: 'Actions',
        dataIndex: 'actions',
        key: 'actions',
        render:()=>{
            return<>
                <EditOutlined/>
                <DeleteOutlined/>
            </>
        }
      },
  ];

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
                            
                                    <Table dataSource={dataSource} columns={columns} />;
                                    
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="album py-2 home-wrapper-2">
        <div className="container-fluid">
          <div className="row">
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
        </div>
      </section>
                </div>
            </div>

        </section>
    </>
  )
}

export default Profile