import { SIGNED_IN, SET_GOALS, SET_COMPLETED } from '../types';

export function logUser(signedInUser) {
    const action = {
        type: SIGNED_IN,
        signedInUser
    }
    return action
}

export function setGoals(goals) {
    const action = {
        type: SET_GOALS,
        goals
    }
    return action
}

export function setCompleted(completedGoals) {
    const action = {
        type: SET_COMPLETED,
        completedGoals
    }
    return action;
}