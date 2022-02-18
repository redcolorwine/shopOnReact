import { connect } from "react-redux"
import Shop from "./shop"


let mapStateToProps = (state) => {
    return {
        types: state.clothes.types,
        brands: state.clothes.brands,
        clothes: state.clothes.clothes,
        isAuth: state.auth.isAuth,
        selectedType: state.clothes.selectedType,
        selectedBrand: state.clothes.selectedBrand
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setTypes: (types) => {
            dispatch({
                type: 'SET_TYPES',
                types
            })
        },
        setBrands: (brands) => {
            dispatch({
                type: 'SET_BRANDS',
                brands
            })
        },
        setClothes: (clothes) => {
            dispatch({
                type: 'SET_CLOTHES',
                clothes
            })
        },
        setIsAuth: (bool) => {
            dispatch({
                type: 'SET_IS_AUTH',
                bool
            })
        },
        selectType: (selectedType) => {
            dispatch({
                type: 'SELECT_TYPE',
                selectedType
            })
        },
        selectBrand: (selectedBrand) => {
            dispatch({
                type: 'SELECT_BRAND',
                selectedBrand
            })
        }
    }
}

const ShopContainer = connect(mapStateToProps, mapDispatchToProps)(Shop);

export default ShopContainer;