import {FETCH_DATA_ERRORED, DATA_IS_LOADING, FETCH_DATA_SUCCESS} from '../actions'

const reducer = (state = {data:[], loading: false}, action) => {
    switch (action.type){
        case FETCH_DATA_ERRORED:
            return {...state, errored: action.errored, isLoading: false};
        case DATA_IS_LOADING:
            return {...state, isLoading: true};
        case FETCH_DATA_SUCCESS:
            return {...state, data: action.data, isLoading: false};
        default:
            return state
    }
}

export default reducer