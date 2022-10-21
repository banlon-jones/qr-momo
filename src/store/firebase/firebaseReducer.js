import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const getItems = createAsyncThunk('get all items',
  async () => null);

const itemSlice = createSlice({
  name: 'itemSlice',
  initialState,
  reducers: {
    setItems(state, action) {
      return { ...state, items: action.payload };
    },
  },
  extraReducers: {
    [getItems.fulfilled]: (state, action) => ({ ...state, items: action.payload.data }),
  },
});

export const { setItems } = itemSlice;
export default itemSlice.reducer;
