import React from 'react';
// import { firebaseApp } from '../config';
import {Link, withRouter} from 'react-router-dom';


const Navbar = (props) => {
    return (
       <div className="navbar-fixed">
        <nav className="nav-wrapper blue darken-2">
          <div className="container">
              <Link to={'/'} className="brand-logo center">Create Your Goals</Link>
          </div>
        </nav>
       </div>
    )
}

export default withRouter(Navbar);