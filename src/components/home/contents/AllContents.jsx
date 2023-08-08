import React, { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import LeftContent from './LeftContent';
import RightContent from './RightContent';
import MainContent from './MainContent';
import { useLoaderData } from 'react-router-dom';
import './AllContents.css'
import LazyLoad from 'react-lazy-load';







const AllContents = () => {


    // const data = useLoaderData() 
    const [chefData, setChefData] = useState([]);
    const [loading, setLoading] = useState(true)

    // const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        fetch('https://baburchi-server-ahmedmakkyy.vercel.app/chefData')
            .then(res => res.json())
            .then(data => setChefData(data))
        setLoading(false)
    }, [])



    return (
        <div>


            <div id="mySlider" className="carousel slide" data-bs-ride="carousel" >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <LazyLoad height={400}>
                            <img src="/pexels-fidel-hajj-2814828.jpg" className="d-block w-100 slider-img img-fluid" alt="Image 1" />
                        </LazyLoad>

                    </div>
                    <div className="carousel-item">
                    <LazyLoad height={400}>
                            <img src="/pexels-min-an-1482803.jpg" className="d-block w-100 slider-img img-fluid" alt="Image 2" />
                        </LazyLoad>

                    </div>
                    <div className="carousel-item">
                    <LazyLoad height={400}>
                            <img src="/pexels-rene-asmussen-2544829.jpg" className="d-block w-100 slider-img img-fluid" alt="Image 3" />
                        </LazyLoad>

                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#mySlider" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#mySlider" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            <div className="row">
                <div className="col-md-3">
                    <div className="text-center mt-3 border-3 border-danger border-bottom pb-2">

                        <h2 className='card-title'>Our Courses</h2>
                    </div>
                    <LeftContent></LeftContent>
                </div>
                <div className="col-md-6">
                <ClipLoader
                            color="#36d7b7"
                            cssOverride={{
                                display: "block",
                                margin: "0 auto",
                                borderColor: "red",
                            }}
                            loading={loading}

                        />
                    <div className="text-center mt-3 border-3 border-danger border-bottom pb-2">
                    
                        <h2 className='card-title'>Our Chefs</h2>
                        

                    </div>
                    <div className="row">




                        {
                            // chefData.map(c=>console.log(c))
                            chefData.map(c => <MainContent
                                key={c.id}
                                c={c}
                            >

                            </MainContent>)
                        }


                    </div>





                </div>
                <div className="col-md-3">
                    <div className="text-center mt-3 border-3 border-danger border-bottom pb-2">

                        <h2 className='card-title'>New Recipies</h2>
                    </div>
                    <RightContent></RightContent>
                </div>
            </div>
        </div>
    );
};

export default AllContents;