import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PostList from "./features/PostList";
import SinglePostPage from "./features/SinglePostPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={PostList}/>
          <Route exact path="/posts/:postId" component={SinglePostPage}/>
           <Route>404</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
