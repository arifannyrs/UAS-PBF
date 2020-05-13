import React, { Component } from 'react';
import { completeGoalRef } from '../../config';
import { connect } from 'react-redux';
import { setCompleted } from '../../actions/index';

class CompleteGoalList extends Component {

    componentDidMount() {
        completeGoalRef.on('value', snapshot=> {
            let completedGoals = [];
            snapshot.forEach(completeGoals=>{
                const { signedInUser, title } = completeGoals.val();
                completedGoals.push({
                    signedInUser,
                    title
                })
            })
            this.props.setCompleted(completedGoals);
        })
    }

    clearCompleted = () => {
        completeGoalRef.set([])
    };


    render() {
        return (
            <div>
            {
                this.props.completedGoals && this.props.completedGoals.map((completeGoal, index)=>{
                    const { title, signedInUser} = completeGoal;
    
                    return  (
                        <div key={index}>
                          <strong>{title}</strong>&nbsp; Complete by <em>{signedInUser}</em>
                        </div>
                    )
                })
             }
    
             {
                 this.props.completedGoals.length>0 ? <button className="btn blue darken-1 z-depth-0 waves-effect waves-light" onClick={this.clearCompleted}>Clear All</button>:null
             }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { completedGoals } = state;
    return {
        completedGoals
    }
}

export default connect(mapStateToProps, { setCompleted })(CompleteGoalList);
