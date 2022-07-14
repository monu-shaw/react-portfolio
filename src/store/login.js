const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  logged: false,
}
const logged = createSlice({
    name: 'logged',
    initialState ,
    reducers: {
        login(state, action) {
         
         if(action.payload === 'PASSWORD'){
            state.logged = true;
         }else{
           alert('Wrong Password')
         }
        },
        logout(state, action){
            state.logged = false;
        },
    } , 
});

export const { login, logout} = logged.actions;
export default logged.reducer;