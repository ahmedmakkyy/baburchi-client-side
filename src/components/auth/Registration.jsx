import React, { useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import Nav from '../fixedContent/Nav';


const Registration = () => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const navigate = useNavigate();

  const { createUser } = useContext(AuthContext)
  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photo, email, password);
    setError('')
    if (!/(?=.*[A-Z])/.test(password)){
      setError('Please add at least one uppercase alphabetical character.');
      return
    }
    else if (password.length<6){
      setError('Password must be 6 charachters long')
    }
    else{
      setSuccess('Registration Successfull. Please Login.')
    }


    createUser(email, password)
      .then(result => {
        const createdUser = result.user;
        // console.log(createdUser);
        updateUserData(createdUser, name, photo)
        // navigate('/');
      })
      .catch(error => {
        console.log(error);
      })
  }

  const updateUserData = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo
    })
      .then(() => {
        console.log('user updated')
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <div className="container">
      <Nav></Nav>
      <div className="row justify-content-center mt-5" >
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white text-center">
              <h4>Register</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <div className="mb-3">
                  <label name="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                  <label name="photo" className="form-label">Photo Url</label>
                  <input type="text" className="form-control" id="photo" />
                </div>
                <div className="mb-3">
                  <label name="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                  <label name="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" required />
                </div>

                <button type="submit" className="btn btn-primary w-100">Register</button>
              </form>
              <p className='text-danger'>{error}</p>
              <p className='text-success'>{success}</p>
            </div>
            <div className="card-footer text-center">
              Already have an account?
              <Link to='/login'> Login
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Registration;