import { createSlice } from '@reduxjs/toolkit';
import * as actions from './actions';

const initialState = {
  toys: [],
  toDo: []
};

export const toysSlice = createSlice({
  name: 'toys',
  initialState,
  reducers: {
    setToys(state, action) {
      state.toys = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actions.getToDo.fulfilled, (state, action) => {
      state.toDo = action.payload;
    });
  }
});

export default toysSlice.reducer;
export const toysActions = toysSlice.actions;