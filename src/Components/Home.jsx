import React from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import Lottie from "lottie-react";
import educationAnimation from '../assets/88023-online-education.json'
const Home = () => {
    return (
        <div className='my-container grid grid-cols-2 items-center gap-3'>
            <div className=''>
                <button className='bg-yellow-500 rounded-lg px-2 text-green-600 mb-3'>ON SALE !</button>
                <h3 className='mb-3'>A reader lives a thousand lives before he dies</h3>
                <p className='mb-3'>Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren’t very new after all. The man who does not read good books is no better than the man who can’t.</p>
                <div className='mb-3 flex items-center justify-center bg-sky-700 w-1/3 text-white p-2 rounded-md'>
                    <button>Visit store</button>  <ShoppingBagIcon className="h-9 w-9 me-2 text-blue-500" />
                </div>
            </div>
            <div>
                <div><Lottie  animationData={educationAnimation} loop={true} /></div>
            </div>
        </div>
    );
};

export default Home;