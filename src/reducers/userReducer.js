export const userReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SET_USER':
            return action.user;
        
        case 'CLEAR_USER':
            return state = {};

        default:
            return state;
    }
}