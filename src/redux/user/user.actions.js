import { SET_CURRENT_USER } from '../constants/user-const';

export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    payload: user
})