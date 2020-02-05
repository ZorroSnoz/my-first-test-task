import React from 'react';
import './App.css';
import FormComponent from './components/form/redux-form-component';
import TableComponent from './components/table/table-component';
import { connect } from 'react-redux';
import { addItem } from './redux/test-task-reduser';


let App = (props) => {
  const { addItem } = props;

  let onSubmit = (formData) => {
    addItem(formData);
  };

  return (
    <div className="App">
      <h1>ТЕСТОВЕ ЗАВДАННЯ</h1>
      <div>
        <FormComponent onSubmit={onSubmit} />
        <TableComponent />
      </div>

    </div>
  );
}

export default connect(null, { addItem })(App);
