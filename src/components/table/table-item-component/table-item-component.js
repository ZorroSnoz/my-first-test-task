import React from 'react';
import male from '../../../images/male.png';
import female from '../../../images/female.png';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

let TableItem = ({ itemData, deleteItem }) => {
    let { first_name, last_name, phone, gender, age, idItem } = itemData;
    return (
        <tr className='tableItem'>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>{phone}</td>
            <td>{gender ? <img src={male} /> : <img src={female} />}</td>
            <td>{age}</td>
            <div onClick={()=>{deleteItem(idItem)}}><DeleteForeverIcon/></div>
        </tr>
    )
};

export default TableItem;