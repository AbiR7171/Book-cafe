import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book';

const Books = () => {
    const {books} = useLoaderData()
    console.log(books)
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5 my-container '>
            {
                books.map(book=> <Book
                key={book.isbn13}
                book={book}
                ></Book>)
            }
        </div>
    );
};

export default Books;