import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice(
    {
        name:"cart",
        initialState:[],
        reducers: {
            add:(state,action)=> {
                state.push(action.payload)
            },
            remove:(state, action) => {
                return state.filter((item) => item.id !== action.payload);
            },
        }
    }
);
export const{add, remove} = CartSlice.actions;
export default CartSlice.reducer;

//reducers functions me do item ati h state and action 
//whatever the input is passes is referred to as payload, action.payload is accessing value 
//filter me vo items stay hongi jo condition fulfill krengi, they will stay in state 