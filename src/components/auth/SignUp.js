import React, { Component } from 'react';
import { firebaseApp } from '../../config';
import M from "materialize-css";
import { Link } from 'react-router-dom';

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        error: {
            message: ''
        },
    };

    componentDidMount() {
        M.AutoInit();
    }

    handleForm = e => {
        e.preventDefault();
    };

    handleChange = e => {
       this.setState({
           [e.target.name]: e.target.value
       })
    };

    handleSignUp = () => {
      const {email, password} = this.state
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .catch(err=> {
                this.setState({error: err})
            });
    }
    render() {
        return (
            <div className="container">
                <h4 className="center">Register</h4>
                <div className="conatainer center">
                        <form className="col s6" onSubmit={this.handleForm}>
                            <div className="row">
                                <div className="input-field col s12">
                                <input type="email" name="email" id="userEmail" className="validate" onChange={this.handleChange} required/>
                                <label htmlFor="userEmail">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                <input type="password" name="password" id="userPassword" className="validate" onChange={this.handleChange} required/>
                                <label htmlFor="userPassword">Password</label>
                                </div>
                            </div>
                            <div className="row">
                            <div className="input-field">
                                <button className="btn blue darken-1 z-depth-0 waves-effect waves-light" onClick={this.handleSignUp}>Submit</button>
                            </div>
                            </div>
                            <div className="row">
                            <p className="red">{this.state.error.message}</p>
                            <div><Link to={'/signin'}>Already a user? Login here</Link></div>
                            </div>
                        </form>

                </div>
            </div>
        )
    }
}

export default SignUp;
