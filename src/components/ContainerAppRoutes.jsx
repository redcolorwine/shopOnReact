import { connect } from "react-redux"
import AppRouter from "./AppRoutes"

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        user: state.auth.user
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
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

const ContainerAppRouter = connect(mapStateToProps, mapDispatchToProps)(AppRouter);

export default ContainerAppRouter;