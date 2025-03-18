import { State } from "@/libs/enums/state.enum";
import { refreshTokenAPI } from "../services/authService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


interface LoginState{
    token: string|null,
    refreshToken: string|null,
    status: State
}

const initialState: LoginState = {
    token: localStorage.getItem("accessToken"),
    refreshToken: localStorage.getItem('refreshToken'),
    status:State.IDLE
};


export const refreshToken = createAsyncThunk('login/refreshToken', async () => {
    let response = await refreshTokenAPI()
    return response.data
})


export const loginSlice = createSlice({
    name: 'loginSlice',
    initialState,
    reducers:{
        
    },
    extraReducers:(builder=>{
        builder.addCase(refreshToken.pending, (state, action)=>{
            state.status = State.LOADING
        }).addCase(refreshToken.rejected, (state, action)=>{
            state.status = State.ERROR
            state.token = null
            state.refreshToken = null
        }).addCase(refreshToken.fulfilled, (state, action)=>{
            state.status = State.IDLE
            state.token = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
        })
    })

})

export default loginSlice.reducer

