// MAKING ACTIONS

import axios from "axios";

// ACTIONS HAVING DISPATCHER(TO MAKE API CALL)
export function fetchPosts() {
    // returning an anonymous function which has access to the dispatch method
    return function (dispatch) {
        // DISPATCH() ALLOWS US TO UPDATE OUR APPLICATION STATE
        // dispatching action type 'posts_fetch_req' which was handled in action() method in postsReducer.js
        dispatch({ type: "posts_fetch_req" })
        axios.get("http://localhost:3001/posts")
            .then(response => {
                // if success, pass data to reducer
                dispatch({
                    // Every dispatch() has 2 things - {type, payload}. Although payload is optional. type is action type(name) is mandatory
                    type: "posts_fetch_success",
                    payload: response.data
                })
            })
            .catch(error => {
                // tell reducer to show error in this case
                dispatch({
                    type: "posts_fetch_failure",
                    payload: "Something went wrong"
                })
            })
    }
}