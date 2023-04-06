import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {image, price, title, subtitle}= book
    return (
        <Link
         to="/bookDeatiels/:id"
        >
            <div className='overflow-hidden mt-5 relative transition duration-200 rounded transform hover:-translate-y-2 '>
            <img className='object-cover w-full h-80 ' src={image} alt="" />
            <div className='bg-black  opacity-0 hover:opacity-75 p-2 flex flex-col text-white absolute inset-0 '>
                <h2 className="text-2xl">{title}</h2>
                <br />
                <p className="text-1xl">{subtitle.substring(0,10)}...see more</p>
                <br />
                <p className='mt-auto'>Price:${price}</p>
            </div>
        </div>
        </Link>
    );
};

export default Book;