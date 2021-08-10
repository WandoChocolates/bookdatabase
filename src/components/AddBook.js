import React, {useState} from "react";
import config from './config';

export default function AddBook() {
  const [state, setState] = useState({
    error: null,
    isLoaded: false,
    items: [],
    rank: 0,
    title: "",
    author: "",
    book_image: "",
    amazon_product_url: ""
  });

  const URL = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=';
  const mykey = config.MY_KEY;

  const handleBooksOwned = () => {}
  const handleBooksToBuy = () => {}

  console.log('state', state);

  return (
    <div>
      <h1>Add Book</h1>
      <button onclick={handleBooksOwned}>Enter the books you own</button>
      <button onclick={handleBooksToBuy}>Enter the books you’d like to buy</button>
    </div>
  );
}
