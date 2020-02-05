import React from 'react';
import male from '../../../images/male.png';
import female from '../../../images/female.png';

let TableItem = (props) => {
return (
    <tr className='tableItem'>
    <td>Артур</td>
    <td>Сноз</td>
    <td>0938307062</td>
    <td><img src={male} /></td>
    <td>22</td>
</tr>
)
};

export default TableItem;