import React from 'react';
import { Provider } from 'react-redux';
import appStore from './store';

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
    <Provider store={appStore}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <BookStore />
          </Route>
          <Route path="/book/:id">
            <Reader />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}
