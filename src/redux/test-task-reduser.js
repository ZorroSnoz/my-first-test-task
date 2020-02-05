import { generatorId } from '../service/generator-id';

const ADD_ITEM = 'ADD_ITEM';

let initialState = {
    itemsData: []
};


const appReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM: {

            let itemData = { ...action.formData, idItem: generatorId() };
            itemData.age = +itemData.age;
            itemData.gender === '0' ? itemData.gender = true : itemData.gender = false;

            console.log(itemData)

            return {

            };
        }
        default: {
            return state;
        }
    }

};

export let addItem = (formData) => ({ type: ADD_ITEM, formData });

export default appReduser;