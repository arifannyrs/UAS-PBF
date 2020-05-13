import { combineReducers } from 'redux';
import user from './user_reducer';
import goals from './goals_reducer';
import completedGoals from './completed_reducer';

export default combineReducers({
    user,    
    goals,
    completedGoals
})