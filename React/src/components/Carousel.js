import React from 'react';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom'

const contentStyle: React.CSSProperties = {
  width: '100%',
  borderradious: '25px',
};

const App: React.FC = () => (
  <Carousel autoplay>
   
      <Link to='/album-detail'className='position-relative'>
      <div className="title-wrapper position-absolute col-4 text-white">
        <h2 className="Album">
        did you know that there's a tunnel under ocean blvd
        </h2>
        <p className="Artist">
            Lana Del Rey
        </p>
        <Link to='/album-detail'className='border-0 px-3 py-2 fw-bold w-20 rounded-pill text-dark text-center text-decoration-none'
            style={{background: "#1ed760"}} type="submit">
              
            Listen Now
        </Link>
      </div>
      <img
                src="https://yt3.googleusercontent.com/5XBgl2LQtGOliV9QWJr989stN0fX6W8z7S52UmcOVB_9-h9QQs9g2RHRKLVWJpUTBQZ3NwSHlQ=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
                alt=""
     style={contentStyle}
     />
      </Link>

      <Link to='/album-detail' className='position-relative'>
      <div className="title-wrapper position-absolute col-4 text-white">
        <h2 className="Album">
        Happier Than Ever
        </h2>
        <p className="Artist">
        Billie Eilish
        </p>
        <Link to='/album-detail'className='border-0 px-3 py-2 fw-bold w-20 rounded-pill text-dark text-center text-decoration-none'
            style={{background: "#1ed760"}} type="submit">
              
            Listen Now
        </Link>
      </div>
      <img
                src="https://yt3.googleusercontent.com/63giC-V_Ovv-skWtQJU3v4pw2-jxZpjWdgpuO6EerTiUHGu5XLYriLoKjtjQrNawA_JMif276A=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"

                alt=""
     style={contentStyle}
     />
      </Link>
      
      <Link to='/album-detail' className='position-relative'>
      <div className="title-wrapper position-absolute col-4 text-white">
        <h2 className="Album">
        Unreal Unearth
        </h2>
        <p className="Artist">
        Hozier
        </p>
        <Link to='/album-detail' className='border-0 px-3 py-2 fw-bold w-20 rounded-pill text-dark text-center text-decoration-none'
            style={{background: "#1ed760"}} type="submit">
              
            Listen Now
        </Link>
      </div>
      <img
                src="https://yt3.googleusercontent.com/ET-0J23A2gW00eurB2ha6e1GG-T55fKNyCIwKaVejEZLPvoTiHH1h819_ofwcFZf5tu6YJw=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
                alt=""
     style={contentStyle}
     />
      </Link>

      <Link to='/album-detail' className='position-relative'>
      <div className="title-wrapper position-absolute col-4 text-white">
        <h2 className="Album">
        Dawn FM
        </h2>
        <p className="Artist">
        The Weeknd
        </p>
        <Link to='/album-detail' className='border-0 px-3 py-2 fw-bold w-20 rounded-pill text-dark text-center text-decoration-none'
            style={{background: "#1ed760"}} type="submit">
              
            Listen Now
        </Link>
      </div>
      <img
                src="https://yt3.googleusercontent.com/y8Tg_DzKC1oSq-MMDWWIO3Rrjs2WarqcHRMGZypLNFCtf5tB5gOCXSSsxMhbFqaSBljUu4AC=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
                alt=""
     style={contentStyle}
     />
      </Link>
  </Carousel>
);

export default App;