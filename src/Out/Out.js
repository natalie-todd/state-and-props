import React from 'react';

import './Out.css';

const Out = (props) => {
    return (
        <div className='Out'>
            <p>I'm Natalie and my username is {props.un}!</p>
            <p>{props.children}</p>
        </div>
    )
};

export default Out;