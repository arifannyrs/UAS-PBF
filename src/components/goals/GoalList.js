import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../../config';
import { setGoals } from '../../actions/index';
import GoalItem from './GoalItem';

class GoalList extends Component {

    componentDidMount () {
        goalRef.on('value', snapshot => {
            let goals = [];
            snapshot.forEach(goal=> {
                //console.log(goal.val())
                const { signedInUser, title } = goal.val();
                const serverKey = goal.key;
                goals.push({signedInUser, title, serverKey})
            })
            this.props.setGoals(goals)
        })
    }

    render() {
        return (
            <ul className="collection with-header">
                {
                    this.props.goals && this.props.goals.map(goal=>{
                            return (
                                <GoalItem key={goal.serverKey} goal={goal}/>
                            )
                    })
                }
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    const { goals } = state;
    return {
       goals
    }
}

export default connect(mapStateToProps, {setGoals})(GoalList);

