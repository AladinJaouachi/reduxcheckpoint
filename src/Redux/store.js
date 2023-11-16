import { configureStore } from '@reduxjs/toolkit';
import todoreducer from './Slice/TodoSlice';


export const store = configureStore({
  reducer: {todo:todoreducer},
})