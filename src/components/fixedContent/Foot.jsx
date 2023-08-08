import React from 'react';

const Foot = () => {
  return (
    <div>
      <footer className="bg-dark text-light py-4 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>About Us</h3>
              <p>We are a team of passionate chefs dedicated to bringing you the best recipes and cooking tips.</p>
            </div>
            <div className="col-md-3">
              <h3>Links</h3>
              <ul className="list-unstyled">
                <li><a href="/">Home</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h3>Follow Us On</h3>
              <span className='me-1'> <img src="/icons8-facebook.svg" alt="" className='img-fluid' style={{height:'40px',width:'40px'}} /> </span>
              <span className='me-1'> <img src="/icons8-instagram.svg" alt="" className='img-fluid' style={{height:'40px',width:'40px'}} /> </span>
              <span className='me-1'> <img src="/icons8-twitter.svg" alt="" className='img-fluid' style={{height:'40px',width:'40px'}} /> </span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Foot;