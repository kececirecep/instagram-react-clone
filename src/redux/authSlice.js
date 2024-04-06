import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../firebase/firebase";

export const fetchAuthData = createAsyncThunk(
  'auth/fetchAuthData',
  async () => {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          resolve(user);
        } else {
          resolve(null);
        }
      }, (error) => {
        reject(error);
      });
    });
  }
);

const authSlice = createSlice({
    name:'auth',
    initialState:{
        currentUser: null,
        loading: false,
        error: null,
    },
    reducers:{},
    extraReducers: (builder) => {
      builder
        .addCase(fetchAuthData.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchAuthData.fulfilled, (state, action) => {
          state.loading = false;
          state.currentUser = action.payload;
        })
        .addCase(fetchAuthData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    }
});

export const { } = authSlice.actions;

export default authSlice.reducer;
