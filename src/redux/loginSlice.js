import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { auth } from '../firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

export const loginAsync = createAsyncThunk(
    'auth/login',
    async ({ email, password }) => {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;
        console.log(user);
        return user;
    }
)

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        user: {},
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loading = false;
                state.error = null;
                console.log({action});
                console.log(action.payload.uid);
            })
            .addCase(loginAsync.rejected, (state,action)=>{
                state.loading=false;
                state.error = action.error.message;
            })
    }
})
 
export default loginSlice.reducer;