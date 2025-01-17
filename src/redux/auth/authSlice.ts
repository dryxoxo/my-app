import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Auth {
    unique_id?: string,
    access_token?: string,
    refresh_token?: string,
}

const initialState:Auth = {
    unique_id: '',
    access_token: '',
    refresh_token: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<Auth>){
        state.access_token = action.payload.access_token
        state.refresh_token = action.payload.refresh_token
    },
    register(state, action: PayloadAction<Auth>){
        state.unique_id = action.payload.unique_id
    }
  }
});

export const {login, register} = authSlice.actions
// export const selectAuth = (state: RootState) => state.auth.value
export default authSlice.reducer