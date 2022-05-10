import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ruta = 'https://pixabay.com/api/?key=6473511-0417f2cad683f1bee54cafe15';

export const axiosApiPixebayImg = createAsyncThunk('Data/lisData', () => {
  const rutaImg = ruta + '&q=yellow+flowers&image_type=photo';
  return axios
    .get(rutaImg)
    .then((resp) => {
      const img = [];
      for (let i = 0; i < resp.data.hits.length; i++) {
        img.push({ name: resp.data.hits[i].tags, url: resp.data.hits[i].imageURL });
      }
      return img;
    })
    .catch((error) => error);
});

export const axiosApiPixebayQuery = createAsyncThunk('Data/lisData', (query) => {
  const rutaImg = ruta + '&q=' + query + '&image_type=photo';
  return axios
    .get(rutaImg)
    .then((resp) => {
      const img = [];
      for (let i = 0; i < resp.data.hits.length; i++) {
        img.push({ name: resp.data.hits[i].tags, url: resp.data.hits[i].imageURL });
      }
      return img;
    })
    .catch((error) => error);
});

const initialState = {
  lisData: [],
  allImgs: [],
  load: false
};

export const dataSlice = createSlice({
  name: 'Data',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.login = action.payload.state;
    },
    setLisData: (state, action) => {
      state.lisData = action.payload.lisData;
    },
    setLoad: (state, action) => {
      state.load = action.payload;
    }
  },
  extraReducers: {
    [axiosApiPixebayImg.fulfilled.type]: (state, action) => {
      state.allImgs = action.payload;
      state.load = false;
    },
    [axiosApiPixebayQuery.fulfilled.type]: (state, action) => {
      state.allImgs = action.payload;
      state.load = false;
    }
  }
});

export const { setData, setLisData, setLoad } = dataSlice.actions;

export default dataSlice.reducer;
