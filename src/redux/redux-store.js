import { createStore, combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import appReduser from './test-task-reduser';

let redusers = combineReducers(
    {
        form: formReducer,
        appData: appReduser 
    });

const store = createStore(redusers);

window.store = store;
export default store;