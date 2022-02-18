import cmedia from './clothesPage.module.css'
import tshirt from '../../media/fet.jpg'
import starRaiting from '../../media/Vector.png';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { shopAPI } from '../../api/api';
const ClothesPage = (props) => {

    const [cloth, setCloth] = useState({ info: [] });

    const { id } = useParams();

    useEffect(() => {
        shopAPI.getOneCloth(id).then(data => {
            setCloth(data);
        })
    }, [])

    return (
        <div className={cmedia.clothesPage}>
            <div className={cmedia.mainBlock}>
                <img src={'http://localhost:5000/' + props.clothes[0].img} alt="" />
                <div className={cmedia.descriptionBlock}>
                    <h3>{props.clothes[0].name} <img src={starRaiting} alt="" /></h3>
                    <p>{props.clothes[0].price} P.</p>
                    <p>ЦВЕТ: черный</p>
                    <div className={cmedia.size}>
                        <p>Размер: </p>
                        <button>29</button>
                        <button>30</button>
                        <button>32</button>
                        <button>33</button>
                        <button>34</button>
                        <button>36</button>
                        <button>38</button>
                    </div>
                    <button className={cmedia.addBut}>Добавить в корзину</button>
                </div>
            </div>
            <div className={cmedia.otherSpec}>
                <p>ОПИСАНИЕ:</p>
                <p>Футболка черная</p>

                <p>- Эластичный материал</p>

                <p>Размер модели на фото: M (32/32)</p>
                <p>Рост модели на фото: 189 см</p>
                <p>Параметры модели на фото:</p>
                <p>грудь: 102
                    талия: 85
                    бёдра: 98</p>

                <p> Страна производства: Китай</p>
                <p>Состав
                    68% Вискоза, 28% Нейлон, 4% Эластан</p>
            </div>
        </div>)
}

export default ClothesPage;
