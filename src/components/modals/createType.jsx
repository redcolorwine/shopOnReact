import { useState } from 'react';
import { shopAPI } from '../../api/api';
import cmedia from './modals.module.css';

const CreateType = (props) => {
    const [value, setValue] = useState('');
    const AddType = () => {
        shopAPI.createType({ name: value }).then(data => {
            setValue('');
            props.setTypeModal(false);
        })
    }

    return (
        <div className={cmedia.createType}>
            <h3>Добавить тип</h3>

            <input type="text" placeholder='Введите название типа' value={value} onChange={e => setValue(e.target.value)} />
            <button className={cmedia.addBut} onClick={AddType}>Добавить</button>
            <button onClick={() => props.setTypeModal(false)} className={cmedia.closeBut}>Закрыть</button>


        </div>
    )
}


export default CreateType;