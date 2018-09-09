import React from 'react';
import { Input } from 'reactstrap';
import './In.css';

const In = (props) => {
    return (
        <div className='In'>
            <Input placeholder='Enter New UserName Here...' type='text' onChange={props.changed} value={props.un}/>
        </div>
    )
};

export default In;