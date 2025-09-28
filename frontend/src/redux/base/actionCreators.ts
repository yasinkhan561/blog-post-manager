import { RootState } from '@/redux/store';

export const selectLoading = (state: RootState) => state.base.loading;
export const selectError = (state: RootState) => state.base.error;
