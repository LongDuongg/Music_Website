import Carousel from '../components/Carousel'
import React from 'react'
import Album from '../components/Album'
import Artist from '../components/Artist'

const Home = () => {
  return (
    <>
      <Carousel/>
      <section className="recently-played pb-2 pt-5 home-wrapper-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading text-white">Recently Played</h3>
            </div>
              <Album/>
              <Artist/>
              <Album/>
              <Album/>
              <Album/>
              <Album/>
          </div>
        </div>
      </section>
      <section className="trending py-2 home-wrapper-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading text-white">Trending</h3>
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
      <section className="recommend py-2 home-wrapper-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading text-white">Recommend</h3>
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
    </>
    
  )
}

export default Home