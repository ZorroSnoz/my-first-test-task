import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLength15, minLength2, phone, letter, age } from '../../service/validation';
import { Input, RadioGroup } from './input-fields/input-fields';


let FormComponent = (props) => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit} >
            <Field
                placeholder={`Ім'я`}
                type={'text'}
                name={'first_name'}
                component={Input}
                validate={[required, maxLength15, minLength2, letter]}
            />
            <Field
                placeholder={`Прізвище`}
                type={'text'}
                name={'last_name'}
                component={Input}
                validate={[required, maxLength15, minLength2, letter]} />
            <Field
                placeholder={`Телефон`}
                type={'text'}
                name={'phone'}
                component={Input}
                validate={[required, phone]} />
            <div><p>Стать:</p></div>
            <Field component={RadioGroup} name={'gender'} validate={[required]} options={[
                { title: 'Чоловік', value: '0', id: 'male' },
                { title: 'Жінка', value: '1', id: 'female' }
            ]} />
            <Field
                placeholder={`Вік`}
                type={'text'}
                name={'age'}
                component={Input}
                validate={[required, age]} />
            <button type='submit'>ДОДАТИ</button>
        </form>
    )
};

FormComponent = reduxForm({ form: 'test-task' })(FormComponent);

export default FormComponent;