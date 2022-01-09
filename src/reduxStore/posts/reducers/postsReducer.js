// REDUCERS

export default function postsReducer(
    // this state can be viewed in redux-devtools-extension
    state = {
        all: [],
        isFetching: false,
        isError: false,
        errorMessage: null
    },
    action
) {
    switch (action.type) {
        case "posts_fetch_req": return {
            ...state, //js spread operator.
            // due to above spread operator, only `isFetching` will be changed in the state.
            isFetching: true //this is a loader.... true to show when fetching
        }
        case "posts_fetch_success": return {
            ...state,
            isFetching: false, // false loader when success
            all: action.payload // here response data will come from fetchPosts.js where `payload: response.data` is getting dispatched.
        }
        case "posts_fetch_failure": return {
            ...state,
            isFetching: false,
            isError: true,
            errorMessage: action.payload // here message will come from fetchPosts.js where payload message is sent.
        }
        default:
            return state
    }
}

// selectors to export states to the application. Selectors has access to global 'state'
export const getAllPosts = state => state.blogPosts.all
export const getFetchPosts = state => state.blogPosts.isFetching
export const getError = state => state.blogPosts.isError