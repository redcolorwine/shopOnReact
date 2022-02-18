import { useState } from 'react';
import { shopAPI } from '../../api/api';
import cmedia from './modals.module.css';

const CreateBrand = (props) => {
    const [value, setValue] = useState('');
    const AddBrand = () => {
        shopAPI.createBrand({ name: value }).then(data => {
            setValue('');
            props.setBrandModal(false);
        })
    }
    return (
        <div className={cmedia.createBrand}>
            <h3>Добавить бренд</h3>
            <form>
                <input type="text" placeholder='Введите название бренда' value={value} onChange={e => setValue(e.target.value)} />
                <button className={cmedia.addBut} onClick={AddBrand}>Добавить</button>
                <button onClick={() => props.setBrandModal(false)} className={cmedia.closeBut}>Закрыть</button>
            </form>
        </div>
    )
}


export default CreateBrand;