import { ADMIN_ROUTE, BASKET_ROUTE, CLOTHES_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts"
import Admin from "./admin/admin"
import Auth from "./auth/auth"
import Basket from "./basket/basket"
import ClothesPage from "./clothesPage/clothesPage"
import Shop from "./shop/shop"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    }, {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: CLOTHES_ROUTE + '/:id',
        Component: ClothesPage
    }
]