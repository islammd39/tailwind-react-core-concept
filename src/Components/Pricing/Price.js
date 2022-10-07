import React from 'react';
import Option from '../Option/Option';

const Price = () => {
    const priceOption=[
        {id:1, name:'Free', price:"0"},
        {id:2, name:'Medium', price:"1.99"},
        {id:3, name:'Premium', price:"9.99"}
    ]
    return (
        <div>
            <h2 className=' text-4xl bg-cyan-500 py-5'>This is price section</h2>
           <div className=' grid grid-cols-3 gap-3'>
            {
                priceOption.map(option => <Option key={option.id} option={option}></Option>)
            }
           </div>
        </div>
    );
};

export default Price;