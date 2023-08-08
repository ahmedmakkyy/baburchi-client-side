
import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <div className='card p-3 mt-3'>
                    <h4>
                        Question 1 : What is the differences between uncontrolled and controlled components ?
                    </h4>
                    <p>
                        Answer : Uncontrolled components are variables that are not purposely manipulated or controlled during an experiment and controlled components are variables that are purposely manipulated or controlled in order to observe their effect on the dependent variable.
                    </p>
                </div>
                <div className='card p-3 mt-3'>
                    <h4>
                        Question 2 : How to validate React props using PropTypes?
                    </h4>
                    <p>
                        Answer : At first we have to import PropTypes from the 'prop-types' package. Then we should define component and its props and add the propTypes property to component. PropTypes can validate different types of props such as string, number, boolean, array, object, function, etc.
                    </p>
                </div>
                <div className='card p-3 mt-3'>
                    <h4>
                        Question 3 : What difference between nodejs and express js?
                    </h4>
                    <p>
                        Answer : Express is a node. js web application framework which provides numbers of features for building web applications. And Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications.
                    </p>
                </div>
                <div className='card p-3 mt-3'>
                    <h4>
                        Question 4 : What is a custom hook, and what is the use of custom hook?
                    </h4>
                    <p>
                        Answer : Custom hooks are reusable functions that allows a developer to add special and unique functionality to the React applications. The main reason to write a custom hook is for code reusability.
                    </p>
                </div>
            </div>
            <div className="col-md-2 mt-3">
                <Link to='/blogpdf'><div className="btn btn-primary w-80">
                Save As PDF</div></Link>
                 </div>
        
            
        </div>

    );
};

export default Blog;