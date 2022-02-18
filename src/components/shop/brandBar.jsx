import cmedia from './shop.module.css'



const BrandBar = (props) => {
    let liBrands = props.brands.map(brand => {
        return (
            <li key={brand.id} className={(brand.id === props.selectedBrand.id) && cmedia.active} onClick={() => { props.selectBrand(brand) }}>
                <a href="#">{brand.name}</a>
            </li>)
    })
    return (

        <nav>
            {liBrands}
        </nav>


    )

}

export default BrandBar;