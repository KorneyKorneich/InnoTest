//!! not according to the FSD architecture, but it's the only way to make it work
import { userReducer } from '@/entity/user'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch