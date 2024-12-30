//!! not according to the FSD architecture, but it's the only way to make it work
import { userReducer } from '@/entity/user'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    userReducer: userReducer,
  },
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore['dispatch']