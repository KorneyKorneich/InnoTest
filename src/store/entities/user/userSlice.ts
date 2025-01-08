import { Nullable } from '@/helpers/helpers';
import { createSlice } from '@reduxjs/toolkit'
import { User } from 'firebase/auth'

interface UserState {
  user: Nullable<User>;
  isLoading: boolean;
  userImage: Nullable<string>;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
  userImage: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    clearUser: (state) => {
      state.user = null
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setUserImage: (state, action) => {
      state.userImage = action.payload
    },
  },
})

export const { setUser, clearUser, setIsLoading, setUserImage } = userSlice.actions

export default userSlice.reducer