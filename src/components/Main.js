import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SearchPage from './SearchPage.js';
import BookDetailPage from './BookDetailPage.js';

const NoMatchRoute = () => <div>404 Page</div>;
const Main = () => {
  const onSubmitHandler = () => {}

  return (
    <>
      <h1>ADD BOOK</h1>
      <form onSubmit={onSubmitHandler}>
        <label>Title:</label><input type="text" /><br/>
        <label>Authors:</label><input type="text" /><br/>
        <label>Language:</label><input type="text" /><br/>
        <input type="checkbox" />
        <label>Enter the books you own</label><br/>
        <input type="checkbox" />
        <label>Enter the books you’d like to buy</label><br/>
        <input type="submit" value="Submit" />
        <button>Clear</button>
    </form>
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