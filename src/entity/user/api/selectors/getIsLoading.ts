import { RootState } from "@/shared/config";

export const getIsLoading = (state: RootState) => state.userReducer.isLoading;