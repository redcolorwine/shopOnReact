import { connect } from "react-redux"
import ClothesPage from "./clothesPage"

let mapStateToProps = (state) => {
    return {
        clothes:state.clothes.clothes,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}


const ClothesPageContainer=connect(mapStateToProps,mapDispatchToProps)(ClothesPage);

export default ClothesPageContainer;