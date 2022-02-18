import cmedia from './admin.module.css';
import CreateType from '../modals/createType.jsx';
import CreateBrand from '../modals/createBrand.jsx';
import CreateClothes from '../modals/createClothes.jsx';
import { useState } from 'react'
const Admin = (props) => {
    let [typeModal, setTypeModal] = useState(false);
    let [brandModal, setBrandModal] = useState(false);
    let [clothesModal, setClothesModal] = useState(false);
    return (
        <div className={cmedia.admin}>
            <button className={cmedia.addButtons} onClick={() => setTypeModal(true)}>Добавить тип</button>
            {typeModal && <CreateType setTypeModal={setTypeModal} />}

            <button className={cmedia.addButtons} onClick={() => setBrandModal(true)}>Добавить бренд</button>
            {brandModal && <CreateBrand setBrandModal={setBrandModal} />}
            <button className={cmedia.addButtons} onClick={() => setClothesModal(true)}>Добавить вещь</button>
            {clothesModal && <CreateClothes selectedType={props.selectedType} selectedBrand={props.selectedBrand} selectType={props.selectType} selectBrand={props.selectBrand} types={props.types} brands={props.brands} setClothesModal={setClothesModal} />}
        </div>
    )
}

export default Admin;