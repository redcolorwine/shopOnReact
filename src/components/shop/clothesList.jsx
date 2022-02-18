import ClothesItem from './clothesItem';
import cmedia from './shop.module.css';

const ClothesList = (props) => {
    let clothesItems = props.clothes.map(cloth => {
        return (<ClothesItem key={cloth.id} clothes={cloth} />)
    })
    return (
        <div>
            {clothesItems}
        </div>
    )
}

export default ClothesList;