import { generatorId } from '../service/generator-id';
import { local } from '../service/local-storage';

const ADD_ITEM = 'ADD_ITEM';
const SET_ITEM = 'SET_ITEM';
const SORT_AGE = 'SORT_AGE';
const SORT_GENDER = 'SORT_GENDER';
const SORT_PHONE = 'SORT_PHONE';
const SORT_LASTNAME = 'SORT_LASTNAME';
const SORT_FIRSTNAME = 'SORT_FIRSTNAME';
const DELETE_ITEM = 'DELETE_ITEM';

let initialState = {
    itemsData: []
};


const appReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM: {

            let itemData = { ...action.formData, idItem: generatorId() };
            itemData.age = +itemData.age;
            itemData.gender === '0' ? itemData.gender = true : itemData.gender = false;

            let newItemsData = [...state.itemsData, itemData];
            local.setItem(newItemsData);
            return {
                ...state,
                itemsData: newItemsData
            };
        }
        case SET_ITEM: {

            if (local.getItem() === null) {
                return {
                    ...state
                };
            }

            return {
                ...state,
                itemsData: local.getItem()
            };
        }
        case SORT_AGE: {
            let newItemsData = state.itemsData.map(item => Object.assign({}, item))
            newItemsData.sort((a, b) => a.age - b.age);
            local.setItem(newItemsData);
            return {
                ...state,
                itemsData: newItemsData
            };
        }
        case SORT_GENDER: {
            let newItemsData = state.itemsData.map(item => Object.assign({}, item))
            newItemsData.sort((a, b) => a.gender - b.gender);
            local.setItem(newItemsData);
            return {
                ...state,
                itemsData: newItemsData
            };
        }
        case SORT_PHONE: {
            let newItemsData = state.itemsData.map(item => Object.assign({}, item))
            newItemsData.sort((a, b) => a.phone - b.phone);
            local.setItem(newItemsData);
            return {
                ...state,
                itemsData: newItemsData
            };
        }
        case SORT_LASTNAME: {
            let newItemsData = state.itemsData.map(item => Object.assign({}, item))
            newItemsData.sort((a, b) => {
                if (a.last_name > b.last_name) {
                  return 1;
                }
                if (a.last_name < b.last_name) {
                  return -1;
                }
                return 0;
              });
            local.setItem(newItemsData);
            return {
                ...state,
                itemsData: newItemsData
            };
        }
        case SORT_FIRSTNAME: {
            let newItemsData = state.itemsData.map(item => Object.assign({}, item))
            newItemsData.sort((a, b) => {
                if (a.first_name > b.first_name) {
                  return 1;
                }
                if (a.first_name < b.first_name) {
                  return -1;
                }
                return 0;
              });
            local.setItem(newItemsData);
            return {
                ...state,
                itemsData: newItemsData
            };
        }
        case DELETE_ITEM: {
            let newItems = state.itemsData.filter(item => item.idItem != action.itemId);
            local.setItem(newItems);
            return {
                ...state,
                itemsData: newItems
            };
        }
        default: {
            return state;
        }
    }

};



export let addItem = (formData) => ({ type: ADD_ITEM, formData });
export let setItems = () => ({ type: SET_ITEM });
export let sortAge = () => ({ type: SORT_AGE });
export let sortGender = () => ({ type: SORT_GENDER });
export let sortPhone = () => ({ type: SORT_PHONE });
export let sortLastName = () => ({ type: SORT_LASTNAME });
export let sortFirstName = () => ({ type: SORT_FIRSTNAME });
export let deleteItem = (itemId) => ({ type: DELETE_ITEM, itemId });

export default appReduser;