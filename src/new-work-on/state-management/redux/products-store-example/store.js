// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/productsSlice';
//
// export default configureStore({
//     reducer: {
//         counter: counterReducer,
//     },
// });


import {configureStore} from "@reduxjs/toolkit";
import productsReducer from './products-slice';

export default configureStore({
   reducer:{
       products: productsReducer
   }
});