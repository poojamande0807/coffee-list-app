
const initialState = {
    coffeeList: [],
    loading: false,
    error: null,
};

const coffeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_COFFEE_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_COFFEE_SUCCESS':
            return { ...state, loading: false, coffeeList: action.payload };
        case 'FETCH_COFFEE_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default coffeeReducer;
