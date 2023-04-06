import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookDeatiels = () => {
    const book = useLoaderData()
    console.log(book)
    return (
        <div>
            
        </div>
    );
};

export default BookDeatiels;