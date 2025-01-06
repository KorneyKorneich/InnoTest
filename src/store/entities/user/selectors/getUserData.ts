import { RootState } from "@/store/store";

export const getUserData = (state: RootState) => state.userReducer.user;