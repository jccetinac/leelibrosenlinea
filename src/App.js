import React from 'react';
import './Styles/App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';

import Reader from './pages/Reader';
import BookStore from './pages/BookStore';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <BookStore />
        </Route>
        <Route path="/reader:id">
          <Reader />
        </Route>
      </Switch>
    </Router>
  );
}
