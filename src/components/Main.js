import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SearchPage from './SearchPage.js';
import BookDetailPage from './BookDetailPage.js';

const NoMatchRoute = () => <div>404 Page</div>;
const Main = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={SearchPage} />
          <Route path="/book/:bookId" exact component={BookDetailPage} />
          <Route component={NoMatchRoute} />
        </Switch>
      </Router>
    </>
  );
};

export default Main;