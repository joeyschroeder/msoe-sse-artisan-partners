import { configureStore } from '@reduxjs/toolkit';
import { sampleReducer } from './sample/sample';

export const store = configureStore({
  reducer: {
    sample: sampleReducer,
  },
});
