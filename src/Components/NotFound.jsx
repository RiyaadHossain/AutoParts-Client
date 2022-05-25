import React from 'react';
import NotFoundImg from '../Assets/Images/NotFound.gif'

const NotFound = () => {
    return (
        <div className='min-h-[65vh]'>
            <h1 className='text-4xl md:text-5xl font-bold text-center mt-32 md:mt-2'>404</h1>
            <img className='mx-auto' src={NotFoundImg} alt="" />
        </div>
    );
};

export default NotFound;