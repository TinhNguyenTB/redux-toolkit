import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchAllUsers = createAsyncThunk(
    'users/fetchAllusers',
    async () => {
        const response = await axios.get("http://localhost:8080/users/all");
        return response.data
    }
)

export const createNewUser = createAsyncThunk(
    'users/createNewUser',
    async (email, password, username) => {
        let res = await axios.post("http://localhost:8080/users/create", { email, password, username });
        if (res && res.data.errCode === 0) {
            fetchAllUsers()
        }
    }
)

const initialState = {
    listUsers: [],
    isLoading: false,
    isError: false,
    isCreating: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
            .addCase(fetchAllUsers.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.listUsers = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(fetchAllUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(createNewUser.pending, (state, action) => {
                state.isCreating = true
            })
            .addCase(createNewUser.fulfilled, (state, action) => {
                state.isCreating = false
            })
            .addCase(createNewUser.rejected, (state, action) => {
                state.isCreating = false
            })
    },
})

export default userSlice.reducer