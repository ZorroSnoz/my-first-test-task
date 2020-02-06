import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLength15, maxLength3, minLength2, phone } from '../../service/validation';
import { Input } from './input-fields/input-fields';


let FormComponent = (props) => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit} >
            <Field
                placeholder={`Ім'я`}
                type={'text'}
                name={'first_name'}
                component={Input}
                validate={[required, maxLength15, minLength2 ]} 
                />
            <Field
                placeholder={`Прізвище`}
                type={'text'}
                name={'last_name'}
                component={Input}
                validate={[required, maxLength15, minLength2 ]} />
            <Field
                placeholder={`Телефон`}
                type={'text'}
                name={'phone'}
                component={Input}
                validate={[required, phone ]}  />
                <div><p>Стать:</p></div>
            <div className='genderBox' >
                <Field
                    id='male'
                    name={'gender'}
                    type='radio'
                    value="0"
                    component={'input'}  />
                    {/* https://github.com/redux-form/redux-form/issues/1857 */}
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
                component={Input}
                validate={[required, maxLength3 ]} />
            <button type='submit'>ДОДАТИ</button>
        </form>
    )
};

FormComponent = reduxForm({ form: 'test-task' })(FormComponent);

export default FormComponent;