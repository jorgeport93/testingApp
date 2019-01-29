export const FETCH_DATA_ERRORED = 'FETCH_DATA_ERRORED';
export const DATA_IS_LOADING = 'DATA_IS_LOADING';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export function dataErrored(bool) {
    return {
        type: 'FETCH_DATA_ERRORED',
        errored: bool
    };
}

export function dataLoading(bool) {
    return {
        type: 'DATA_IS_LOADING',
        isLoading: bool
    };
}

export function dataFetched(data) {
    return {
        type: 'FETCH_DATA_SUCCESS',
        data
    };
}

export function fetchTestData() {
    return (dispatch) => {
        dispatch(dataLoading(true));

        fetch('https://opentdb.com/api.php?amount=10')
            .then((response) => {
                if (!response.ok) {
                    throw Error('Error Occurred');
                }

                dispatch(dataLoading(false));

                return response.json();
            })
            .then((response) => {return response.results})
            .then((data) => dispatch(dataFetched(data)))
            .catch(() => dispatch(dataErrored(true)));
    };
}