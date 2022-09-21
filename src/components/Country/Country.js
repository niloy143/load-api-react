import React from 'react';

const Country = props => {
    console.log(props)
    const {name, area} = props.country;
    return (
        <div className='text-center bg-slate-700 text-white p-5 rounded-md'>
            <p>Country Name: {name.common}</p>
            <p>Area Code: {area}</p>
        </div>
    );
};

export default Country;