import { useEffect } from 'react';
import { shopAPI } from '../../api/api';
import BrandBar from './brandBar';
import ClothesList from './clothesList';
import cmedia from './shop.module.css'
import TypeBar from './typeBar';


const Shop = (props) => {

    useEffect(() => {
        shopAPI.getTypes().then(data => {
            props.setTypes(data);
        });
        shopAPI.getBrands().then(data => {
            props.setBrands(data);
        });
        shopAPI.getClothes().then(data => {
            props.setClothes(data.rows);
        });
    }, [])

    return (
        <div className={cmedia.Shop}>
            <TypeBar types={props.types} selectedType={props.selectedType} selectType={props.selectType} />

            <div className={cmedia.items}>

                <BrandBar brands={props.brands} selectedBrand={props.selectedBrand} selectBrand={props.selectBrand} />

                <div className={cmedia.brandBar}>
                    <ClothesList clothes={props.clothes} />
                </div>
            </div>
        </div>
    )

}

export default Shop;