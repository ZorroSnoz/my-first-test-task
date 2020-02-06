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

export let RadioGroup = ({ input, meta, options }) => {
        const hasError = meta.touched && meta.error;
        console.log(input.value);
        return (
            <div className='genderBox'>
                    {options.map(o =><label className={(hasError ? 'errorInput' : '') + (o.value === input.value ? ' labelRadio' : '')} key={o.value}><input type='radio' {...input} checked={o.value === input.value} value={o.value}  /> {o.title}</label>)}      
                    {hasError && <span className="errorSpan">{meta.error}</span>}
            </div>
        );
    }
