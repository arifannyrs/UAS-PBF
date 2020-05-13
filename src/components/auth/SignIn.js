import React, {useState} from 'react';
import EmailLogin from './EmailLogin';
import FirebaseUI from './firebaseUI';
import { Link } from 'react-router-dom';

const SignIn = () => {

    const [loginType, setloginType] = useState('email');

    const handleLoginType = e => {
        setloginType(e.target.dataset.type)
    }

    
    if(loginType === 'email') {
        return (
            <>
                <h4 className="center">Login</h4>
                <EmailLogin/>
                <div className="container center">
                  <Link to={'/signup'}>New User? Register here</Link>
                  <p>or</p>
                  <p className="blue-text" style={{cursor:'pointer'}} data-type="otp" onClick={handleLoginType}>Login with your Number</p>
                </div>
            </>
        )
    } else {
        return(
            <>
                <h4 className="center">Login</h4>
                <FirebaseUI/>
                <br/>
                <div className="container center">               
                 <p className="blue-text" style={{cursor:'pointer'}} data-type="email" onClick={handleLoginType}>Login with Email</p>
                </div>
            </>
        ) 
    }
   
}

export default SignIn;