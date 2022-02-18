import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { shopAPI } from '../../api/api';
import cmedia from './auth.module.css'

const Auth = (props) => {
    const location = useLocation();
    const history = useNavigate();
    const isLogin = location.pathname === "/login";
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    const signInUp = async () => {
        try {
            let data;
            if (isLogin) {
                data = await shopAPI.login(email, password);
            } else {
                data = await shopAPI.registration(email, password);

            }
            props.setUser(data);
            props.setIsAuth(true);
            history('/shop');
        } catch (e) {
            alert(e.response.data.message);
        }

    }

    return (
        <div className={cmedia.Auth}>
            <div className={cmedia.AuthForm}>
                {isLogin ? <h4>Авторизация</h4> : <h4>Регистрация</h4>}
                <input type="text" placeholder='Введите Ваш email' value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder='Введите Ваш пароль' value={password} onChange={e => setPassword(e.target.value)} />
                {isLogin ? <p>Нет аккаунта? <NavLink to="/registration">Регистрация</NavLink></p> : <p>Зарегистрированы? <NavLink to="/login">Перейти к авторизации</NavLink></p>}
                {isLogin ? <button onClick={signInUp}>Войти</button> : <button onClick={signInUp}>Зарегистрироваться</button>}
            </div>
        </div>
    )
}

export default Auth;