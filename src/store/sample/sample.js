import { createSlice } from '@reduxjs/toolkit';

const sampleSlice = createSlice({
  name: 'sample',
  initialState: { value: 0 },
  reducers: {
    resetSample: (state) => ({ ...state, value: 0 }),
    incrementSample: (state) => ({ ...state, value: state.value + 1 }),
    decrementSample: (state) => ({ ...state, value: state.value - 1 }),
    incrementSampleByAmount: (state, { payload }) => ({
      ...state,
      value: payload,
    }),
  },
});

const { actions, reducer } = sampleSlice;
const {
  decrementSample,
  incrementSample,
  incrementSampleByAmount,
  resetSample,
} = actions;

export {
  decrementSample,
  incrementSample,
  incrementSampleByAmount,
  reducer as sampleReducer,
  resetSample,
};
