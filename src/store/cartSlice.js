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
          state.cartItem = state.cartItem.map((i) => i.id === action.payload.id ? {...i, quantity: i.quantity + 1}: i);

           //let data = state.cartItem.find((i)=>i.id === action.payload.id);
           //console.log(`${data.id} - ${data.quantity + 1}`);
         }else{
           let i = action.payload;
          //state.cartItem.push(Object.assign(merge(array, {quantity: 1})));  
          state.cartItem.push({
            id: i.id,
            title: i.title,
            image: i.image,
            description: i.description,
            price: i.price,
            quantity: 1
          })
         }
        },
        remove(state, action){
          //return   state.cartItem.filter((item)=>item.id !== action.payload);
          //console.log(state.cartItem);
          state.cartItem = state.cartItem.filter((item)=>item.id !== action.payload)
        },
    } , 
});

export const { add, remove} = cartSlice.actions;
export default cartSlice.reducer;