import axios from 'axios';

export const fetchCoffee = () => {
    return async (dispatch) => {
        dispatch({ type: 'FETCH_COFFEE_REQUEST' });
        try {
            const response = await axios.get('https://dolce.execute-api-ap-south-1.amazonaws.com/mockapi/get-coffer');
            dispatch({ type: 'FETCH_COFFEE_SUCCESS', payload: response.data });
        } catch (error) {
            dispatch({ type: 'FETCH_COFFEE_FAILURE', payload: error.message });
        }
    };
};
