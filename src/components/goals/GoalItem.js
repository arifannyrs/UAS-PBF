import React from 'react';
// import { connect } from 'react-redux';
import { goalRef, completeGoalRef } from '../../config';

const GoalItem = props => {
    const { signedInUser, title, serverKey } = props.goal;

    const completeGoal = () => {
        goalRef.child(serverKey).remove();
        completeGoalRef.push({
            signedInUser,
            title
        })
    }

    return (
        <li className="collection-item">
             <div>
               <span className="title"><strong>{title}</strong></span><br/>
               <span style={{fontSize:12}}>
                 Submitted by: <em>{signedInUser}</em>
               </span>
               <a href="#!" className="secondary-content" title="Complete" onClick={completeGoal}><i className="material-icons">check</i></a>
             </div>
        </li> 
    )
}

export default GoalItem;