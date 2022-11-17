import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { logInWithPassword, registerUserPasswordAndEmail } from '../../services/registerUser';

const initialState = { isLoading: false, user: {} };

export const registerUser = createAsyncThunk('register user', async (payload) => {
  const user = await registerUserPasswordAndEmail(payload);
  if (user) {
    return user;
  }
  return null;
});

export const loginUser = createAsyncThunk('login user', async (payload) => logInWithPassword(payload));

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    isLoading(state) {
      return { ...state, isLoading: true };
    },
    stopLoading(state) {
      return { ...state, isLoading: false };
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => ({ ...state, isLoading: true }),
    // eslint-disable-next-line max-len
    [registerUser.fulfilled]: (state, action) => ({ ...state, isLoading: false, user: action.payload }),
    [loginUser.pending]: (state) => ({ ...state, isLoading: true }),
    // eslint-disable-next-line max-len
    [loginUser.fulfilled]: (state, action) => ({ ...state, isLoading: false, user: action.payload }),
  },
});

export const { isLoading, stopLoading } = userSlice.actions;
export default userSlice.reducer;
