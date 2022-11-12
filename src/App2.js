import React from 'react';
import './Styles/App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';

export default function App2() {
  return (
    <Router>
      <div>
        <Link className="btn btn-danger ml-3" to="/">
          Home
        </Link>
        <Link className="btn btn-danger ml-3" to="/about">
          About
        </Link>
      </div>
      <Switch>
        <Route path="/about">aaa</Route>
        <Route path="/producto/:id/">ppp</Route>
        <Route path="/crear">ccc</Route>
        <Route path="/borrar">ddd</Route>
        <Route path="/update">aaa</Route>
        <Route path="/login">lll</Route>
        <Route path="/registro">rrr</Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  );
}
