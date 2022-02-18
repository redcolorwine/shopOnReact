import { useEffect, useState } from 'react';
import { shopAPI } from '../../api/api';
import cmedia from './modals.module.css';

const CreateClothes = (props) => {
    let [info, setInfo] = useState([]);
    let [name, setName] = useState('');
    let [price, setPrice] = useState(0);
    let [file, setFile] = useState(null);

    useEffect(() => {
        shopAPI.getTypes().then(data => {
            props.setTypes(data);
        });
        shopAPI.getBrands().then(data => {
            props.setBrands(data);
        });
    }, [])
    const addInfo = () => {

        setInfo([...info, { title: '', description: '', number: Date.now() }]);

    }
    const removeInfo = (number) => {

        setInfo(info.filter(i => i.number !== number));

    }
    const selectFile = e => {
        setFile(e.target.files[0])
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i))
    }
    const addClothes = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', `${price}`);
        formData.append('img', file);
        formData.append('brandId', props.selectedBrand.id);
        formData.append('typeId', props.selectedType.id);
        formData.append('info', JSON.stringify(info));
        shopAPI.createClothes(formData).then(data => {
            props.setClothesModal(false)
        })
    }
    return (
        <div className={cmedia.createClothes}>
            <h3>Добавить вещь</h3>

            Выберите тип:
            <select name="types" id="types">

                {props.types.map(type => {
                    return (<option
                        onClick={() => { props.selectType(type) }}
                        id={type.id}>
                        {type.name}
                    </option>)
                })}
            </select>
            Выберите бренд:
            <select name="brands" id="brands">
                {props.brands.map(brand => {
                    return (<option onClick={() => { props.selectBrand(brand) }} id={brand.id}>{brand.name}</option>)
                })}
            </select>
            <input type="text" placeholder='Заголовок' value={name} onChange={e => setName(e.target.value)} />
            <input type="text" placeholder='Стоимость' value={price} onChange={e => setPrice(Number(e.target.value))} />
            <span>Изображение <input type="file" onChange={selectFile} /> </span>
            <button className={cmedia.addProp} onClick={addInfo}>Добавить новое свойство</button>
            {info.map(i => {
                return (
                    <>
                        <input className={cmedia.propsInput} type="text" value={i.title} onChange={(e) => changeInfo('title', e.target.value, i.number)} placeholder='Введите название свойства' />
                        <input className={cmedia.propsInput} type="text" value={i.description} onChange={(e) => changeInfo('description', e.target.value, i.number)} placeholder='Введите описание свойства' />
                        <button className={cmedia.closeButProp} onClick={() => removeInfo(i.number)}>Удалить</button>
                    </>

                )
            })}
            <button className={cmedia.addBut} onClick={addClothes}>Добавить</button>
            <button onClick={() => props.setClothesModal(false)} className={cmedia.closeBut}>Закрыть</button>

        </div>
    )
}


export default CreateClothes;