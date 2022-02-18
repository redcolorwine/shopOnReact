import authReducer from "./authReducer";
import clothesReducer from "./clothesReducer";

const { combineReducers, createStore } = require("redux");

let reducers = combineReducers({
    auth:authReducer,
    clothes:clothesReducer
})

let store=createStore(reducers);

export default store;