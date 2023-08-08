import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css'
import { AuthContext } from '../../providers/AuthProvider';

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isShown, setIsShown] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => { console.log(error); })
  }
  return (

    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient">
        <div className="container">
          <a className="navbar-brand fw-bolder" href="/">BABURCHI's WORLD</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to='/' ><a className="nav-link" aria-current="page" href="#">Home</a></NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/blog' ><a className="nav-link" aria-current="page" href="#">Blog</a></NavLink>
              </li>
            </ul>

          </div>

          { user ? 
          <div>
            {isShown && <span className='text-white'> {user.displayName}</span>}
             <img src={user.photoURL} alt="" className='img-fluid rounded-circle mx-3' style={{width:"50px",height:"50px"}}  onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)} />
      
          <Link>
            <button className="btn btn-danger btn-sm" type="submit" onClick={handleLogOut}>Logout</button></Link></div> : 
            <Link to='/login'> <button className="btn btn-danger btn-sm" type="submit">Login</button></Link>}
        </div>
      </nav>


    </div>
    // <div className='container'>
    //     <nav className="navbar navbar-expand-lg bg-light">
    //         <div className="container-fluid">
    //             <a className="navbar-brand" href="#">Baburchi</a>


    //                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //                     <li className="nav-item">
    //                         <Link to='/'><a className="nav-link" aria-current="page" href="#">Home</a></Link>


    //                     </li>
    //                     <li className="nav-item">
    //                         <Link to='/blog'><a className="nav-link" aria-current="page" href="#">Blog</a></Link>


    //                     </li>


    //                 </ul>
    //                 <form className="d-flex" role="search">
    //                     <Link to='/login'> <button className="btn" type="submit">Search</button></Link>

    //                 </form>

    //         </div>
    //     </nav>
    // </div>
  );
};

export default Nav;