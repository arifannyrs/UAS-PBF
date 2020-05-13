import { SIGNED_IN } from '../types';

let user = {
    signedInUser: null
};

export default (state=user, action) => {
    switch (action.type) {
        case SIGNED_IN:
            const { signedInUser } = action;
            user = { 
                signedInUser
            }
            return user;
    
        default:
            return state;
    }
}