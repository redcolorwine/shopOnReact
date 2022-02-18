import cmedia from './shop.module.css';
import starRaiting from './../../media/Vector.png';
import { useNavigate } from 'react-router-dom'
const ClothesItem = (props) => {
    const history = useNavigate();
    console.log(history);
    return (
        <div className={cmedia.clothesItem} onClick={() => {
            history('/clothes/' + props.clothes.id)
        }}>
            <img src={'http://localhost:5000/'+props.clothes.img} alt="" />
            <p>Футболка черная</p>
            <p>Цена: {props.clothes.price}</p>
            <p>Рейтинг: {props.clothes.rating} <img className={cmedia.star} src={starRaiting} alt="" /></p>
        </div>
    )
}

export default ClothesItem;