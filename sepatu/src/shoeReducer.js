// shoeReducer.js
const initialState = {
    shoes: []
    };
    const shoeReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'ADD_SHOE':
    return {
    ...state,
    shoes: [...state.shoes, action.payload]
    };
    case 'DELETE_SHOE':
    return {
    ...state,
    shoes: state.shoes.filter((_, index) => index !== 
    action.payload)
    };
    default:
    return state;
    }
    };
    export default shoeReducer;