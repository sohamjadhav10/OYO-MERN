import React from 'react';

import './Body.css';
import im1 from './1.avif';
import im2 from './2.avif';
import hd from './hd.jpg';
import im3 from './image.png';
import Footer from '../footer/Footer';



const Body = () => {
    return (
        <div>
            {/* <!-- Search-Container --> */}
  
  <div className="container-main">
    <div className="search-container">
        <h2 className='ov'><b>Over 174,000+ hotels and homes across 35+ countries</b></h2>
        <form className="search-row d-flex mt-4 g-0 min-vh-100">
            <div className="sr1">
                <input type="text" className="form-control" placeholder="Search by city, hotel, or neighborhood"/>
            </div>
            {/* <div className="col-md-2">
                <button type="button" className="btn btn-light w-100">Near me</button>
            </div> */}
            <div className="sr2">
                <input type="text" className="form-control" value="Thu, 5 Dec - Fri, 6 Dec" readonly/>
            </div>
            <div className="sr3">
                <input type="text" className="form-control" value="1 Room, 1 Guest" readonly/>
            </div>
            <div className="sr4">
                <button type="submit" className="btn btn-light w-100">Search</button>
            </div>
        </form>
    </div>
  </div>
  
  <br/>


{/* <!-- Images --> */}
    <img src={im1} className="rounded mx-auto d-block im"  alt="img1"/>
    <br/><br/>
    <img src={im2} className="rounded mx-auto d-block im"  alt="img2"/>
      <br/><br/>

{/* <!-- Enquiry --> */}
  
    <div className="container mt-5">
      <div className="deals-card bg-white d-flex align-items-center">
          <div className="icon me-3">
            <img src={hd} alt="Exclusive Deals Icon"/>
          </div>

          <div className="flex-grow-1">
              <h5 className="mb-1">Get access to exclusive deals</h5>
              <p className="text-muted mb-0">Only the best deals reach your inbox</p>
          </div>

          <form className="d-flex align-items-center">
              <div className="me-2">
                  <input
                      type="email"
                      className="form-control"
                      placeholder="e.g., john@email.com"
                      required
                  />
              </div>
              <button type="submit" className="btn btn-red">Notify me</button>
          </form>
      </div>
    </div>
<br/>
{/* <!-- Map --> */}
 <div className="map-container">
  <img src={im3} className="img-fluid" alt="map"/> 
 </div>
       <Footer/>
        </div>
    );
};

export default Body;