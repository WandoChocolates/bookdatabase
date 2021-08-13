import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SearchPage from './SearchPage.js';
import BookDetailPage from './BookDetailPage.js';

const NoMatchRoute = () => <div>404 Page</div>;
const Main = () => {
  const handleBooksOwned = () => {}
  const handleBooksToBuy = () => {}

  return (
    <>
      <h1>Add Book</h1>
      <button onClick={handleBooksOwned}>Enter the books you own</button>
      <button onClick={handleBooksToBuy}>Enter the books you’d like to buy</button>
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