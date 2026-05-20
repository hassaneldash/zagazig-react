import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter', // Internal identifier for this slice
  initialState: { value: 0 },
  reducers: {
    // RTK automatically base on reducers => generate "Actions"
    reset: (state) => {
      state.value = 0; // Immer handle immutability behind the scene/under the hood
    },

    increase: (state) => {
      state.value += 1; // Immer handle immutability behind the scene/under the hood
    },

    decrease: (state) => {
      state.value -= 1; // Immer handle immutability behind the scene/under the hood
    },

    increaseByValue: (state, action) => {
      state.value += action.payload;
    },
  },
});

// To use Actions => We must export the generated Actions
export const { reset, increase, decrease, increaseByValue } = counterSlice.actions;

// We must export the reducers to wire it into main store
export default counterSlice.reducer;
