import React from 'react';
import { BoltIcon } from '@heroicons/react/24/solid'
import ActiveLink from './ActiveLink';
const Header = () => {
    return (
        <div className='my-container  flex justify-between bg-slate-500 p-5 rounded text-white sticky top-0 z-10'>
            <div className='inline-flex items-center'>
            <BoltIcon className="h-9 w-9 me-2 text-blue-500" />
            <h2 className='text-3xl font-bold'>NextPage</h2>
            </div>
            <div className='text-2xl flex gap-3 font-semibold '>
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/books">Books</ActiveLink>
                <ActiveLink to="/about">About us</ActiveLink>
            </div>
        </div>
    );
};

export default Header;