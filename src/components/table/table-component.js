import React from 'react';
import male from '../../images/male.png';
import female from '../../images/female.png';
import TableItem from './table-item-component/table-item-component';

let TableComponent = (props) => {
    return (
        <div>
            <table>
                <tr className='headerTable'>
                    <td>Ім'я:</td>
                    <td>Прізвище:</td>
                    <td>Телефон:</td>
                    <td>Стать:</td>
                    <td>Вік:</td>
                </tr>
<TableItem />
<TableItem />
<TableItem />
            </table>
        </div>
    )
};

export default TableComponent;