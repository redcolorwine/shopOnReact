import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import cmedia from './navbar.module.css';
const Navbar = (props) => {

    let history = useNavigate();

    const logOut = () => {
        props.setUser({});
        props.setIsAuth(false);
        localStorage.removeItem('token')
    }

    return (<div className={cmedia.header}>
        <div className={cmedia.logo}>
            <h1><NavLink to="/">YOTHSMATURITY</NavLink></h1>

        </div>
        <div className={cmedia.menu}>
            <ul>
                <li><NavLink to="/clothes">Clothes</NavLink></li>
                <li><NavLink to="#">About Us</NavLink></li>
                <li><NavLink to="#">Help</NavLink></li>
                {props.isAuth ?
                    <><button onClick={() =>logOut()}>LogOut</button>
                        <button onClick={() => { history('/admin') }}>Admin</button></> :
                    <><button onClick={() => { history('/login') }}>LogIn</button>
                    </>}
            </ul>

        </div>
    </div>)
}

export default Navbar;

