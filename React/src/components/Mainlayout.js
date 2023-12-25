import React, { useState, useContext } from 'react';
import { GoHome } from "react-icons/go";
import { RiFolderMusicFill } from "react-icons/ri";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import{
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsShuffle,
} from "react-icons/bs";
import { RiAccountCircleLine } from "react-icons/ri";
import {CgPlayTrackNext, CgPlayTrackPrev} from "react-icons/cg";
import {FiRepeat} from "react-icons/fi";
import { Outlet } from 'react-router-dom';

import { Context } from '../context/GlobalContext';

const { Header, Sider, Content } = Layout;

const Mainlayout = () => {
  const { user, signOut } = useContext(Context);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  const navigate = useNavigate();

  
  return (
    <Layout className='' style={{background: "#121212", minheight: "100vh"}}>
      <Layout >
        {user && (
          <Sider
        
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 1,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
            trigger={null} collapsible collapsed={collapsed}
          >
            <div className='p-3 mb-2'>
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" alt="Logo" className='w-100' />
            </div>
            <Link to='/upload'className='border-0 px-3 py-2 fw-bold w-100 rounded-pill text-dark text-center text-decoration-none' style={{background: "#1ed760"}} type="submit"><UploadOutlined className='fs-5' />  Upload</Link>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              onClick={({ key }) => { navigate(key) }}
              items={[
                {
                  key: '',
                  icon: <GoHome  className='fs-4'/>,
                  label: 'Home',
                },
                {
                  key: 'search',
                  icon: <SearchOutlined  className='fs-4'/>,
                  label: 'Search',
                },
                {
                  key: 'libraries',
                  icon: <RiAccountCircleLine className='fs-4' />,
                  label: 'Your Libraries',
                },
              ]}
            />
          </Sider>
        )}
        <Layout>
          <Header 
            className='d-flex justify-content-between ps-1 pe-5' 
            style={{ padding: 0, background: "black"}}>
            <Button
              className='text-white'
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
              {user ? (
                <>
                  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <div className='d-flex h-100'>
                      <div className='d-flex h-100'>
                        <img className='d-flex h-100 p-2' src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp" alt="" />
                      </div>
                      <div className='text-white text-start ' >
                        <h5 className=''>{user}</h5>
                      </div>
                    </div>
                  </button>
                  <ul class="dropdown-menu">
                    <li><Link to=""className="dropdown-item ">Profile</Link></li>
                    <li>
                      <Link to="/login" className="dropdown-item " >
                        <button style={{
                          cursor: "pointer",
                          background:"#0000",
                          border:"none",
                          color: "#000",
                          fontSize: "1rem"
                        }} onClick={() => {signOut()}}> 
                          Log out
                        </button>
                      </Link>
                    </li>
                  </ul>
                </>
              ) : (
                <Link to={"/Login"} className="btn">
                  <button style={{
                    padding: "7px 25px", 
                    minheight: "100vh", 
                    cursor: "pointer",
                    background:"#0000",
                    border:"none",
                    color: "#fff",
                    fontWeight:"bold",
                    fontSize: "1.5rem"
                  }}>
                    Login
                  </button>
                </Link> 
              )}
              
            
          </Header>

          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: "#000000",
              borderRadius: borderRadiusLG,
              marginBottom:'300px',
            }}
          >
          <Outlet/>
          </Content>
          
        </Layout>
        
      </Layout>
      {user && (
        <div className='footer fixed-bottom d-flex align-items-center'>
          <div className="Current-track p-3 d-flex align-items-center col-3">
            <img src="https://www.aimm.edu/hubfs/Blog%20Images/Top%2010%20Album%20Covers%20of%202017/Tyler%20the%20Creator-%20Flower%20boy.jpg#keepProtocol" alt="" />
            <div className='px-3 d-flex flex-column'>
              <Link className="Track-title">Track</Link>
              <Link className="Author">Author</Link>
            </div>
          </div>
        
          <div className="Player-control d-flex flex-column align-items-center col-5">
            <div className='Control-button d-flex w-50 justify-content-between align-items-center'>
            <div className="">
              <BsShuffle className='text-white fs-4'/>
            </div>
            <div className="">
              <CgPlayTrackPrev className='text-white fs-1'/>
            </div>
            <div className="">
              <BsFillPauseCircleFill className='text-white fs-1'/>
            </div>
            <div className="">
              <CgPlayTrackNext className='text-white fs-1'/>
            </div>
            <div className="">
              <FiRepeat className='text-white fs-4'/>
            </div>
          </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Mainlayout;