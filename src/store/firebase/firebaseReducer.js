import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { logInWithPassword, logOut, registerUserPasswordAndEmail } from '../../services/registerUser';

const initialState = { isLoading: false, user: {}, isLoggedIn: false };

export const registerUser = createAsyncThunk('register user', async (payload) => {
  const user = await registerUserPasswordAndEmail(payload);
  if (user) {
    return user;
  }
  return null;
});

export const loginUser = createAsyncThunk('login user', async (payload) => logInWithPassword(payload));

export const logOutUser = createAsyncThunk('logout user', async () => logOut());

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
    [registerUser.fulfilled]: (state, action) => (
      { ...state, isLoading: false, user: action.payload }
    ),
    [loginUser.pending]: (state) => ({ ...state, isLoading: true }),
    [loginUser.fulfilled]: (state, action) => (
      {
        ...state, isLoading: false, user: action.payload, isLoggedIn: true,
      }
    ),
    [logOutUser.pending]: (state) => ({ ...state, isLoading: true }),
    [logOutUser.fulfilled]: (state) => ({ ...state, isLoading: false, isLoggedIn: false }),
  },
});

export const { isLoading, stopLoading } = userSlice.actions;
export default userSlice.reducer;
