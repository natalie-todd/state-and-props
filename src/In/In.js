import React from 'react';

import './In.css';

const In = (props) => {
    return (
        <div className='In'>
            <input type='text' onChange={props.changed}/>
        </div>
    )
};

export default In;