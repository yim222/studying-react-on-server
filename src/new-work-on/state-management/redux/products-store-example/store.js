// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/productsSlice';
//
// export default configureStore({
//     reducer: {
//         counter: counterReducer,
//     },
// });


import {configureStore} from "@reduxjs/toolkit";

export default configureStore({
   reducer:{
       products: productsReducer
   }
});