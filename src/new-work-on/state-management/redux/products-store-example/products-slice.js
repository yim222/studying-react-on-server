//this suppose to be slice for products of the whole state.
//Slices are used to automatically generate action creators and selectors on the module level. On the application level,
// Slices are combined into a single state shape tree that is used to generate reducers and initialize Redux store.
import {createSlice} from '@reduxjs/toolkit';
//It some techniques
export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: {
            book: 0,
            bread: 0,
            shoes: 0,
            candle: 0
        }
    },
    reducers: {
        set: (oldState, action) => {
            //I think payload is the default data that provided? -
            oldState.products = action.payload;
        },
        // decrement: state => {
        //     state.value -= 1;
        // },
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload;
        // },
    },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectProducts = state => state.prodcuts.value;

export const {set} = productsSlice.actions;