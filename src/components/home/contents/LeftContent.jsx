import React from 'react';
import LazyLoad from 'react-lazy-load';

const LeftContent = () => {
    return (
        <div className="card shadow-lg mt-3">
            <LazyLoad onContentVisible={() => {console.log('loaded!')}}><img src="/ChefJorgeNoriega-07-Square.jpg" className="card-img-top rounded p-3"  alt="Instructor"/></LazyLoad>
                <div className="card-body">
                    <h5 className="card-title mb-4">Become a Master Chef</h5>
                    <p className="card-text mb-4">Learn the art of cooking from the best chefs in the industry. Our comprehensive course covers everything from knife skills to advanced culinary techniques.</p>
                    <a href="#" className="btn btn-primary">Enroll Now</a>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Taught by Chef John Smith</small>
                </div>
        </div>

    );
};

export default LeftContent;