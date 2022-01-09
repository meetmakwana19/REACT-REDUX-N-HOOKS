# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### [Redux Flow chart](https://i.ibb.co/VpdCXmB/ecdbd6fa-5433-42cb-ac71-21ecadf49142.jpg)

1. Added libraries needed like 
```bash
npm i redux react-redux redux-thunk redux-devtools-extension
```

2. Created `store.js`
   1. Used `combineReducers` to combine all the reducers.
   2. Check Redux devtools to see all the reducers in the redux store
3. Once the store is ready, to add store to the app, go to the root of the app `inndex.js`
   1. Use `<Provider>` whereas `<App/>` should be wrapped inside the Provider. Provider injects the redux-store in react app
   2. This is how with the help of `index.js`, whole redux store will be available to all the child components of the reactjs app.
4. Now time to create actions from the views.
   1. Create `fetchPosts.js` action
   2. llly can create actions for post, delete posts, etc
      1. USED DISPATCH() WHICH ALLOWS US TO UPDATE OUR APPLICATION STATE
      2. Every dispatch() has 2 things - {type, payload}. Although payload is optional. type is action type(name) is mandatory
      3. These action types (3 in `fetchPosts.js` ) are dispatched to the reducers i.e. `postsReducer.js`
      4. When post if fetched via url in `fetchPosts.js`, the success response if dispatched to the reducer `postsReducer.js`
5. `postsReducer.js` has reducer function which has access to the inital `state` and action.
   1. Has done switch case implementation(can also do if-else)
   2. The payload dispatched by `fetchPosts.js` is caught into `all` state in `postsReducer.js`
   3. By default, the default state will be returned from the switch case.
6. Store, reducer, action is ready.
7. Dispatching the action `fetchPosts.js` in `App.js` inside `useEffect()` to show once[] whenever page reloads. 
8. So `App.js` can be understood as "Views" which dipatched `fetchPosts` action.
   1. Then in `fetchPosts.js`, the response is dispatched to the reducer `postsReducer.js`.
   2. Reducer `postsReducer.js` then saves the dispatched response into state and state gets updated. The state is exported to store.
   3. The change in states in the store gets directly reflected to the frontend views.
   4. Store combines all reducers for `index.js` by importing them.
   5. `index.js` gets whole store via `<Provider>`.
   6. The `PostList` component uses `useSelectore` hook to access the redux store and use that data to render in itself
   7. So whenever there is change in `PostList.js`, the component updates without affecting anything else in the `App.js`.