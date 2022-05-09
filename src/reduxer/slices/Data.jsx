import { createSlice } from '@reduxjs/toolkit';
//import axios from "axios";
const initialState = {};

export const dataSlice = createSlice({
  name: 'Data',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.login = action.payload.state;
    }
  }
});

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;
/*
export const AxiosAllItem=()=>(disptch)=>{
  axios
   .get('http://localhost:5000/products')
   .then((res)=>{
       console.log(res.data)
       disptch(setCarritoList(res.data));
   })
};
*/
