import React, { useEffect } from "react";
import "./App.css"
import { useDispatch } from "react-redux";
import { fetchPosts } from "./reduxStore/posts/actions/fetchPosts";
import PostList from "./components/PostList";
import HooksDemo from "./components/HooksDemo";

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts()) 
    //  Disabling eslint's warning
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  //empty array to run only at initial render when page reloads

  return (
    <div className="container my-5" style={{ display: "flex" }}>

      <div className="container px-4"style={{borderRight:"1px solid white"}}>
        <h1>React-Redux App</h1>
        <h2>Making API calls</h2>
        <hr />
        <PostList />
      </div>

      <div className="container">
        <HooksDemo />
      </div>

    </div>
  );
}

export default App;
