import { connect } from "react-redux"
import Navbar from "./navbar"

let mapStateToProps=(state)=>{
    return{
        types:state.clothes.types,
        brands:state.clothes.brands,
        clothes:state.clothes.clothes,
        isAuth:state.auth.isAuth,
        user:state.auth.user
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        setTypes:(types)=>{
            dispatch({
                type:'SET_TYPES',
                types
            })
        },
        setBrands:(brands)=>{
            dispatch({
                type:'SET_BRANDS',
                brands
            })
        },
        setClothes:(clothes)=>{
            dispatch({
                type:'SET_CLOTHES',
                clothes
            })
        },
        setIsAuth: (bool) => {
            dispatch({
                type: 'SET_IS_AUTH',
                bool
            })
        },
        setUser: (user) => {
            dispatch({
                type: 'SET_USER',
                user
            })
        }
    }
}

const NavbarContainer=connect(mapStateToProps,mapDispatchToProps)(Navbar);

export default NavbarContainer;