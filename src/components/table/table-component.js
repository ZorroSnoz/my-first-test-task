import React from 'react';
import TableItem from './table-item-component/table-item-component';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


let TableComponent = ({itemsData, sortAge, sortGender, sortPhone, sortLastName, sortFirstName, deleteItem}) => {

    let tableItems = itemsData.map( item => <TableItem itemData={item} deleteItem={deleteItem}/>);

    return (
        <div>
            <table>
                <tr className='headerTable'>
                    <td><div onClick={sortFirstName}><ArrowDropDownIcon/><p>Ім'я:</p></div></td>
                    <td><div onClick={sortLastName}><ArrowDropDownIcon/><p>Прізвище:</p></div></td>
                    <td><div onClick={sortPhone}><ArrowDropDownIcon/><p>Телефон:</p></div></td>
                    <td><div onClick={sortGender}><ArrowDropDownIcon/><p>Стать:</p></div></td>
                    <td><div onClick={sortAge} ><ArrowDropDownIcon/><p>Вік:</p></div></td>
                </tr>
                {tableItems}
            </table>
        </div>
    )
};

export default TableComponent;