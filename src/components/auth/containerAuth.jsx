import { connect } from "react-redux"
import Auth from "./auth"

let mapStateToProps=(state)=>{
    return{
        user:state.auth.user,
        isAuth:state.auth.isAuth
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        setUser:(user)=>{
            dispatch({
                type:'SET_USER',
                user
            })
        },
        setIsAuth: (bool) => {
            dispatch({
                type: 'SET_IS_AUTH',
                bool
            })
        }
    }
}

const AuthContainer=connect(mapStateToProps,mapDispatchToProps)(Auth);

export default AuthContainer;