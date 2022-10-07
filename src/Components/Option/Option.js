import React from 'react';

const Option = ({option}) => {
    
    return (
        <div className=' bg-orange-200 py-5 my-3'>
            <p><span className=' text-5xl font-bold'>{option.price}</span>
            <span className=' text-2xl'>/month</span>
            </p>
            <p>{option.name}</p>
        </div>
    );
};

export default Option;