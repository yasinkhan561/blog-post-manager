import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "@/types/post";

interface PostsState {
  postList: Post[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: PostsState = {
  postList: [],
  isLoading: false,
  isError: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPostList: (draftState, action: PayloadAction<Post[]>) => {
      draftState.postList = action.payload;
    },
    addPost: (draftState, action: PayloadAction<Post>) => {
      draftState.postList.unshift(action.payload);
    },
    updatePost: (draftState, action: PayloadAction<Post>) => {
      const index = draftState.postList.findIndex(
        (p) => p.id === action.payload.id
      );
      if (index !== -1) draftState.postList[index] = action.payload;
    },
    deletePostById: (draftState, action: PayloadAction<number>) => {
      draftState.postList = draftState.postList.filter(
        (p) => p.id !== action.payload
      );
    },
    setIsLoading: (draftState, action: PayloadAction<boolean>) => {
      draftState.isLoading = action.payload;
    },
    setIsError: (draftState, action: PayloadAction<boolean>) => {
      draftState.isError = action.payload;
    },
  },
});

export const {
  setPostList,
  addPost,
  updatePost,
  deletePostById,
  setIsLoading,
  setIsError,
} = postsSlice.actions;

export default postsSlice.reducer;
