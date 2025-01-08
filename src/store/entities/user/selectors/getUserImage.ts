import { RootState } from "@/store/store";

export const getUserImage = (state: RootState) => state.userReducer.userImage;