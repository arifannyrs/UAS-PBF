import React  from 'react';
// import { connect } from 'react-redux';
import { firebaseApp } from '../config';
import AddGoal from '../components/goals/AddGoal';
import GoalList from './goals/GoalList';
import CompleteGoalList from './goals/CompleteGoalList';


const Home = () => {

   const signOut = () => {
        firebaseApp.auth().signOut();
   }

    return (
       <div className="container">
       <br/>
           <AddGoal/>
        <br/>
        <fieldset style={{maxHeight:350, overflowY: 'auto'}}>
            <legend>Goals</legend>
            <GoalList/>
        </fieldset>
        <br/>
        <fieldset>
            <legend>Completed Goals</legend>
            <CompleteGoalList/>
        </fieldset>
        <br/>
        <button className="btn blue darken-1 z-depth-0 waves-effect waves-light right" onClick={signOut}>Sign Out</button>
       </div>
    )
}

export default Home;