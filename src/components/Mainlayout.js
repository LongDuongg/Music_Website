import React, { useState } from 'react';
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

const { Header, Sider, Content } = Layout;

const Mainlayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();



  return (
    <Layout className='' style={{background: "#121212"}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        

        <div className='p-3 mb-2'>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" alt="Logo" className='w-100' />
        </div>
        <Link to='/'className='border-0 px-3 py-2 fw-bold w-100 rounded-pill text-dark text-center text-decoration-none' style={{background: "#1ed760"}} type="submit"><UploadOutlined className='fs-5' />  Upload</Link>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          
          items={[
            
            {
              key: '1',
              icon: <GoHome  className='fs-4'/>,
              label: 'Home',
            },
            {
              key: '2',
              icon: <SearchOutlined  className='fs-4'/>,
              label: 'Search',
            },
            {
              key: '3',
              icon: <RiFolderMusicFill className='fs-4' />,
              label: 'Your Library',
            },
            
          ]}
        />
      </Sider>
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
          
            <div className='d-flex h-100 align-items-center'>
              <div className='d-flex h-100'>
                <img className='d-flex h-100 p-2' src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp" alt="" />

              </div>
              <div className='text-white'>
                <h5 className=''>Lam Toan</h5>
                <p className=''>lamtoan2104@gmail.com</p>
              </div>
            </div>
          
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: "#000000",
            borderRadius: borderRadiusLG,
          }}
        >
          <div>
            <h4 className='text-white'>Recently played</h4>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Mainlayout;