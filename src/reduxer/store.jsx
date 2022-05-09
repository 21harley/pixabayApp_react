import { configureStore } from '@reduxjs/toolkit';
import data from './slices/Data';

export default configureStore({
  reducer: {
    data
  }
});
