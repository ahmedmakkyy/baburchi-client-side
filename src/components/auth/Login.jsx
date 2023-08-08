import React, { useContext, useState } from 'react';
import { GithubAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Nav from '../fixedContent/Nav';
const Login = () => {

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log('login page location :', location);
  const from = location.state?.from?.pathname || '/'
  const [error, setError] = useState('')
  const [user, setUser] = useState(null);
  

  const handleLogIn = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signIn(email, password)
      .then(result => {
        const userLogged = result.user;
        console.log(userLogged);
        navigate(from, { replace: true })
       
      })
      .catch(error => {
        if (error.message){
          setError('User not found')
        }
      })

      // if (email === false){
      //   setError('user not found')
      //   console.log('not found');
  
      // }
    

  }

 








  

  const auth = getAuth(app)
  // console.log(app);


  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
        navigate(from, { replace: true })
      })
      .catch(error => {
        console.log('error', error.message);
      })

  }

  const handleGitHubSignIn =()=>{
    signInWithPopup(auth, gitProvider)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      setUser(loggedUser);
      navigate(from, { replace: true })
    })
    .catch(error => {
      console.log('error', error.message);
    })
  }


  // const handleSignOut = () => {
  //   signOut(auth)
  //     .then(result => {
  //       console.log(result);
  //       setUser(null)
  //     })
  //     .catch(error =>{
  //       console.log(error);
  //     })
  // }
  return (

    <div className="container">
      <Nav></Nav>
      <div className="row justify-content-center mt-5">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white text-center">
              <h4>Login</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleLogIn}>
                <div className="mb-3">
                  <label name="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" required />
                  
                </div>
                <div className="mb-3">
                  <label name="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" required />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="remember" />
                  <label className="form-check-label" name="remember">Remember me</label>
                </div>
                <div className='mb-3'>
                  <button type="submit" className="btn btn-primary w-100">Login</button>
                </div>



              </form>
              <p className='text-danger'>{error}</p>
              <hr />
              <div className='row'>
                <div className='col-md-6'>
                  <button type="submit" className="btn btn-primary w-100 bg-light text-dark border border-primary bg-gradient shadow-sm p-3 mb-5 bg-body rounded" onClick={handleGoogleSignIn}><img src='/icons8-google.svg' alt="" style={{height:"30px", width:"30px", padding:"3px"}}/> <span className='fw-semibold'>Google SignIn</span> </button>
                </div>
                <div className='col-md-6'>
                  <button type="submit" className="btn btn-primary w-100 bg-light text-dark border border-dark bg-gradient shadow-sm p-3 mb-5 bg-body rounded" onClick={handleGitHubSignIn}><img src='/icons8-github.svg' alt="" style={{height:"30px", width:"30px", padding:"3px"}}/> <span className='fw-semibold'>Github SignIn</span> </button>
                </div>
             
              </div>
            </div>
            <div className="card-footer text-center">
              Not Registered?
              <Link to="/registration">Register Now</Link>

            </div>
          </div>
        </div>
      </div>



    </div>

  );
};

export default Login;