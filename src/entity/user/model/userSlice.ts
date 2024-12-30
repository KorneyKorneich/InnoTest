import { Nullable } from '@/shared/lib'
import { createSlice } from '@reduxjs/toolkit'
import { User } from 'firebase/auth'

interface UserState {
  user: Nullable<User>;
}

const initialState: UserState = {
  user: null
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
      console.log(action.payload);
    },
    clearUser: (state) => {
      state.user = null
    },
  },
})

export const { setUser, clearUser } = userSlice.actions

export default userSlice.reducer