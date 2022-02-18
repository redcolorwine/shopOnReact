import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import { SHOP_ROUTE } from "../utils/consts";
import Admin from "./admin/admin";
import AdminContainer from "./admin/adminContainer";
import Auth from "./auth/auth";
import AuthContainer from "./auth/containerAuth";
import Basket from "./basket/basket";
import ClothesPage from "./clothesPage/clothesPage";
import ClothesPageContainer from "./clothesPage/clothesPageContainer";
import { authRoutes, publicRoutes } from "./routes";
import Shop from "./shop/shop";
import ShopContainer from "./shop/shopContainer";

const AppRouter = (props) => {
    
    return (

        <Routes>

            {props.isAuth === true &&
                <>
                    <Route path="/admin" element={<AdminContainer />} />
                    <Route path="/basket" element={<Basket />} />
                </>
            }
            <Route path="/" element={<ShopContainer />} />
            <Route path="/login" element={<AuthContainer />} />
            <Route path="/registration" element={<AuthContainer />} />
            <Route path="/clothes/*" element={<ClothesPageContainer />} />
            <Route
                path="*"
                element={<Navigate to="/" />}
            />
           
        </Routes>


    )
}

export default AppRouter;
