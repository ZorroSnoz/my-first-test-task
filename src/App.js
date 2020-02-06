import React, { useEffect } from 'react';
import './App.css';
import FormComponent from './components/form/redux-form-component';
import TableComponent from './components/table/table-component';
import { connect } from 'react-redux';
import { 
  addItem, 
  setItems, 
  sortAge, 
  sortGender, 
  sortPhone, 
  sortLastName,
  sortFirstName,
  deleteItem 
} from './redux/test-task-reduser';
import { reset } from 'redux-form';


let App = (props) => {
  const { 
    addItem, 
    itemsData, 
    reset, 
    setItems, 
    sortAge, 
    sortGender, 
    sortPhone, 
    sortLastName,
    sortFirstName,
    deleteItem 
  } = props;

  useEffect(() => {
    setItems()
  }, []);

  let onSubmit = (formData) => {
    addItem(formData);
    reset('test-task');
  };

  return (
    <div className="App">
      <h1>ТЕСТОВЕ ЗАВДАННЯ</h1>
      <div>
        <FormComponent onSubmit={onSubmit} />
        <TableComponent 
        itemsData={itemsData} 
        sortAge={sortAge} 
        sortGender={sortGender} 
        sortPhone={sortPhone} 
        sortLastName={sortLastName}
        sortFirstName={sortFirstName}
        deleteItem={deleteItem} />
      </div>

    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    itemsData: state.appData.itemsData
  }
};

export default connect(mapStateToProps, { 
  addItem, 
  reset, 
  setItems, 
  sortAge, 
  sortGender,
  sortPhone, 
  sortLastName,
  sortFirstName,
  deleteItem
})(App);
