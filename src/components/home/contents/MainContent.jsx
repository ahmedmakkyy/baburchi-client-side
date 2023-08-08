import React from 'react';
import './MainContent.css'
import { Link, useLoaderData } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const MainContent = ({ c }) => {
    return (

        
        <div className="col-md-6">
            
            
            <div className="card border-0 rounded-0 mt-3">
            <LazyLoad height={200}><img src={c.img} alt="Chef Name" className="card-img-top rounded-0 img-fluid p-3" /></LazyLoad>
                
                <div className="card-body">
                    <h2 className="card-title text-center mb-0">{c.name}</h2>
                    <div className="d-flex justify-content-center mt-2">
                        <div className="p-2 flex-fill text-center">
                            <p className="card-text mb-0">Experience</p>
                            <p className="card-text font-weight-bold">{c.experience}</p>
                        </div>
                        <div className="p-2 flex-fill text-center">
                            <p className="card-text mb-0">Recipes</p>
                            <p className="card-text font-weight-bold">{c.recipes}</p>
                        </div>
                        <div className="p-2 flex-fill text-center">
                            <p className="card-text mb-0">Likes</p>
                            <p className="card-text font-weight-bold">{c.likes}</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <Link to={`/details/${c.id}`}><button className="btn btn-danger btn-sm">View Recipes</button></Link>
                    </div>
                </div>
            </div>
        </div>







    );
};

export default MainContent;