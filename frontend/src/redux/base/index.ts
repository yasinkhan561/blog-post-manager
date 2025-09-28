import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BaseState {
  loading: boolean;
  error: string | null;
}

const initialState: BaseState = {
  loading: false,
  error: null,
};

const baseSlice = createSlice({
  name: 'base',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setError } = baseSlice.actions;
export default baseSlice.reducer;
