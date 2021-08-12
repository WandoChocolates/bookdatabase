import React from 'react';
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const bookAuthors = authors => {
    if (authors) {
      if (authors.length <= 2) {
        authors = authors.join(' and ');
      } else if (authors.length > 2) {
        let lastAuthor = ' and ' + authors.slice(-1);
        authors.pop();
        authors = authors.join(', ');
        authors += lastAuthor;
      }
      return authors;
    }
  };

  return (
    <li>
      <div>
        <img
          alt={`${book.volumeInfo.title} book`}
          src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
        />
        <div>
          <h3>{book.volumeInfo.title}</h3>
          <p>{bookAuthors(book.volumeInfo.authors)}</p>
          <p>{book.volumeInfo.publishedDate}</p>
        </div>

        <Link to={`/book/${book.id}`}>Show details</Link>
      </div>
      <hr />
    </li>
  );
};

const BooksList = ({ books }) => {
  return (
    <ul>
      {books.items.map((book, index) => {
        return (
          <>
            <Book book={book} key={index} />
          </>
        );
      })}
    </ul>
  );
};

export default BooksList;