import { connect } from "react-redux"
import Admin from './admin'
let mapStateToProps = (state) => {
    return {
        types: state.clothes.types,
        brands: state.clothes.brands,
        clothes: state.clothes.clothes,
        selectedType: state.clothes.selectedType,
        selectedBrand: state.clothes.selectedBrand
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
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


const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin);

export default AdminContainer;