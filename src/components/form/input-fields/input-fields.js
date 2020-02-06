import React from 'react';

export let Input = ({ input, meta, ...props }) => {

    let hasError = meta.touched && meta.error;

    return (
        <div className='inputField'>
            <input className={(hasError ? 'errorInput' : '')} {...input} {...props} />
    { hasError && <span className='errorSpan'>{meta.error}</span>} 
        </div>
    )
};