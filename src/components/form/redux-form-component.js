import React from 'react';
import { Field, reduxForm } from 'redux-form';

let FormComponent = (props) => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit} >
            <Field
                placeholder={`Ім'я`}
                type={'text'}
                name={'first-name'}
                component={'input'} />
            <Field
                placeholder={`Прізвище`}
                type={'text'}
                name={'last-name'}
                component={'input'} />
            <Field
                placeholder={`Телефон`}
                type={'text'}
                name={'phone'}
                component={'input'} />
                <div><p>Стать:</p></div>
            <div className='genderBox' >
                <Field
                    id='male'
                    name={'gender'}
                    type='radio'
                    value="0"
                    component={'input'} />
                <label for='male'>Чоловік</label>
                <Field
                    id='female'
                    name={'gender'}
                    type='radio'
                    value="1"
                    component={'input'} />
                <label for='female'>Жінка</label>
            </div>
            <Field
                placeholder={`Вік`}
                type={'text'}
                name={'age'}
                component={'input'} />
            <button type='submit'>ДОДАТИ</button>
        </form>
    )
};

FormComponent = reduxForm({ form: 'test-task' })(FormComponent);

export default FormComponent;