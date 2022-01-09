// REDUX STORE

import {createStore, applyMiddleware, combineReducers} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import postsReducer from "./posts/reducers/postsReducer"

export const store = createStore(
    combineReducers({
        blogPosts : postsReducer, 
        // every entity(posts, comments, accounts) in an app can be a reducer
        // comments: commentsReducer,
        // account: accountReducers,
        // ............. ↓  Just for demonstration purpose on the Redux Devtools
        comments: postsReducer,
        account: postsReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
)