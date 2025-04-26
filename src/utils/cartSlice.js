import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItems: (state, action) =>{
            state.items.push(action.payload);
            console.log(addItems)
        },
        removeitems: (state) =>{
            state.items.pop()
        },
        clearItems: (state) =>{
            state.items.length=0;  //original state = []
            // in RTK either mutate existing state or return new state

            // return {items : []} // this new object will be replaced originalstate = {item: []}
        }
    }
})

export const{addItems, removeitems, clearItems} = cartSlice.actions;

export default cartSlice.reducer;