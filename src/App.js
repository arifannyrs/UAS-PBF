import React  from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import { firebaseApp } from './config';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { logUser } from './actions/index';
import 'materialize-css/dist/css/materialize.min.css';

class App extends React.Component {

  componentDidMount() {
    //  console.log(this.props)

    firebaseApp.auth().onAuthStateChanged(user => {
      if(user) {
             const { email, phoneNumber } = user;
             let signedInType = email ? email:phoneNumber; 
            //  console.log(signedInType);
             this.props.logUser(signedInType);
             console.log('User signed in')
             this.props.history.push('/')          
      } else {
          console.log('User signed out')
          this.props.history.push('/signin')
      }
    })
  }

    render() {
      return (
        <>
          <Navbar/>
          <div className="App">
            <Switch path="/">
              <Route exact path="/" component={Home}/>
              <Route path="/signin" component={SignIn}/>
              <Route path="/signup" component={SignUp}/>
            </Switch>
          </div>
        </>
    )
    }
}

const mapStateToProps = (state) => {
  const { user } = state;
  return {
    user
  }
}

const combineApp = compose(withRouter, connect(mapStateToProps, { logUser }));

export default combineApp(App)
