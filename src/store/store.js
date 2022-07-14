import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from './productSlice';
import logged from './login'

const Store= configureStore({
    reducer:{
        cart: cartReducer,
        product: productReducer,
        logged: logged
    }
});

export default Store;

