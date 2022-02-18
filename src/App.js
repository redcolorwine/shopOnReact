import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRoutes';
import ContainerAppRouter from './components/ContainerAppRoutes';
import NavbarContainer from './components/navbar/navbarContainer';
import Footer from './components/footer/footer';
import { connect, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { shopAPI } from './api/api';
import { useDispatch } from 'react-redux';
let mapStateToProps = (state) => {
  return {

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
function App(props) {

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    shopAPI.check().then(data => {
      props.setIsAuth(({
        type: 'SET_IS_AUTH',
        isAuth: true
      }));
      props.setUser(({
        type: 'SET_USER',
        user: data
      }))
    }).finally(() => setLoading(false))
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <NavbarContainer />
        <div className="app-wrapper">
          <ContainerAppRouter />
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}
let AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
