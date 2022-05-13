import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ruta = 'https://pixabay.com/api/?key=6473511-0417f2cad683f1bee54cafe15';

export const axiosApiPixebayImg = createAsyncThunk('Data/allImgs', () => {
  const rutaImg = ruta + '&q=yellow+flowers&image_type=photo';
  return axios
    .get(rutaImg)
    .then((resp) => {
      //console.log(resp);
      const img = [];
      for (let i = 0; i < resp.data.hits.length; i++) {
        let el = resp.data.hits[i];
        img.push({
          name: el.tags,
          url: el.webformatURL,
          id: el.id,
          author: el.user,
          authorId: el.user_id
        });
      }
      return { img: img, totalPages: resp.data.totalHits / 20 };
    })
    .catch((error) => console.log(error));
});

export const axiosApiPixebayQuery = createAsyncThunk('Data/allImgsQuery', (query) => {
  const rutaImg =
    ruta + '&q=' + query.q + '&image_type=photo' + (query.pages ? '&page=' + query.pages : '');
  //console.log(rutaImg, query.pages);
  return axios
    .get(rutaImg)
    .then((resp) => {
      const img = [];
      for (let i = 0; i < resp.data.hits.length; i++) {
        let el = resp.data.hits[i];
        img.push({
          name: el.tags,
          url: el.webformatURL,
          id: el.id,
          author: el.user,
          authorId: el.user_id
        });
      }
      return { img: img, totalPages: resp.data.totalHits / 20 };
    })
    .catch((error) => console.log(error));
});

export const axiosApiPixebayQueryId = createAsyncThunk('Data/allImgsId', (Id) => {
  const rutaImg = ruta + '&id=' + Id;
  return axios
    .get(rutaImg)
    .then((resp) => {
      const img = resp?.data?.hits[0];
      return { img: img };
    })
    .catch((error) => console.log(error));
});

const initialState = {
  lisData: [],
  allImgs: [],
  load: false,
  pages: 1,
  totalPages: 1,
  query: 'yellow+flowers',
  longQuery: [],
  oneImg: {}
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
    },
    setQuery: (state, action) => {
      state.query = action.payload.query;
      state.longQuery = [...state.longQuery, action.payload.query];
    },
    setAllimgs: (state, action) => {
      state.allImgs = action.payload.allImgs;
    },
    setPage: (state, action) => {
      state.pages = action.payload.pages;
    }
  },
  extraReducers: {
    [axiosApiPixebayImg.fulfilled.type]: (state, action) => {
      state.allImgs = action.payload.img;
      state.totalPages = action.payload.totalPages;
      state.load = false;
    },
    [axiosApiPixebayQuery.fulfilled.type]: (state, action) => {
      state.allImgs = action.payload.img;
      state.totalPages = action.payload.totalPages;
      state.load = false;
    },
    [axiosApiPixebayQueryId.fulfilled.type]: (state, action) => {
      state.oneImg = action.payload.img;
      state.load = false;
    }
  }
});

export const { setData, setLisData, setLoad, setAllimgs, setQuery, setPage } = dataSlice.actions;

export default dataSlice.reducer;
