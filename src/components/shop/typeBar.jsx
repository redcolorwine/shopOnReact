import cmedia from './shop.module.css'
import React from 'react'

const TypeBar = (props) => {
    let selectRef = React.createRef();
    let liTypes = props.types.map(typeElement => {
        return (<li key={typeElement.id} className={(typeElement.id === props.selectedType.id) && cmedia.active} ref={selectRef} onClick={() => { props.selectType(typeElement) }}>
            <a href="#">{typeElement.name}</a>
        </li>)
    })
    console.log(props.selectedType);

    return (

        <div className={cmedia.menu}>
            <ul>
                {liTypes}
            </ul>
        </div>

    )

}

export default TypeBar;

//active={typeElement.id === props.selectedType.id}