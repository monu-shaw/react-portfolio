const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cartItem: [],
}
const cartSlice = createSlice({
    name: 'cart',
    initialState ,
    reducers: {
        add(state, action) {
         
         if(state.cartItem.find((i)=>i.id === action.payload.id)){
           console.log('added');
         }else{
           let array = action.payload;
          state.cartItem.push(Object.assign(merge(array, {quantity: 1})));  
          console.log(state.cartItem)
         }
        },
        remove(state, action){
          return   state.filter((item)=>item.id !== action.payload);
        },
    } , 
});

export const { add, remove} = cartSlice.actions;
export default cartSlice.reducer;