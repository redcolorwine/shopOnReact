//npm i jwt-decode для парсинга токена
import * as axios from 'axios'
import jwtDecode from 'jwt-decode';


//создаем настройки для запросов для переиспользования
const host = axios.create({
    // withCredentials: true,
    baseURL: 'http://localhost:5000/',
    // headers: {
    //     "authorization": `Bearer ${localStorage.getItem('token')}`
    // }
});
const authHost = axios.create({
    // withCredentials: true,
    baseURL: 'http://localhost:5000/',
    // headers: {
    //     "API-KEY": "22479db7-b7b8-42f8-9c53-d72bdb4b8d8f"
    // }
});
//Для подставки токена в хедеры
const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
}
authHost.interceptors.request.use(authInterceptor);
export const shopAPI = {
    async registration(email, password) {
        const { data } = await host.post('api/user/registration', { email, password, role: 'ADMIN' });
        localStorage.setItem('token', data.token);
        return jwtDecode(data.token);
    },
    async login(email, password) {
        const { data } = await host.post('api/user/login', { email, password });
        localStorage.setItem('token', data.token);
        return jwtDecode(data.token);
    },
    async check() {
        const { data } = await authHost.get('api/user/auth');
        localStorage.setItem('token', data.token);
        return jwtDecode(data.token);
    },
    async createType(type) {
        const { data } = await authHost.post('api/type',  type );
        return data;
    },
    async getTypes() {
        const { data } = await host.get('api/type');
        return data;
    },
    async createBrand(brand) {
        const { data } = await authHost.post('api/brand', brand );
        return data;
    },
    async getBrands() {
        const { data } = await host.get('api/brand');
        return data;
    },
    async createClothes(cloth) {
        const { data } = await authHost.post('api/clothes', cloth );
        return data;
    },
    async getClothes() {
        const { data } = await host.get('api/clothes');
        return data;
    },
    async getOneCloth(id) {
        const { data } = await host.get('api/clothes/' + id);
        return data;
    },
}

//вовзращаем сразу data данные из запроса в компоненту, чтобы не передавать лишние данные

