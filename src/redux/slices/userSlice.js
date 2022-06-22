import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// get user
const getUserByEmail = createAsyncThunk('user/fetchByEmail', async (email) => {
    const res = await fetch(`https://evening-sands-63384.herokuapp.com/users/${email}`);
    const data = await res.json();
    return data;
});

// save user to db
const saveUser = createAsyncThunk('user/SaveUser', async (user, method) => {
    const res = await fetch('https://evening-sands-63384.herokuapp.com/users', {
        method,
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    const data = await res.json();
    return data;
});

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {}
    },
    extraReducers: (builder) => {
        builder.addCase(getUserByEmail.fulfilled, (state, { payload }) => {
            state.user.push(payload);
        });
    }
});

export default userSlice.reducer;
