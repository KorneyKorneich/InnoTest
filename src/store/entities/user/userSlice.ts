import { Nullable } from '@/helpers/helpers';
import { createSlice } from '@reduxjs/toolkit'
import { User } from 'firebase/auth'

interface UserState {
  user: Nullable<User>;
  isLoading: boolean;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
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
  },
})

export const { setUser, clearUser, setIsLoading } = userSlice.actions

export default userSlice.reducer