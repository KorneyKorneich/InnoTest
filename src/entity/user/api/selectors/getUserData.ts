import { RootState } from "@/shared/config";

export const getUserData = (state: RootState) => state.userReducer.user;