import { RootState } from "@/redux/store";

export const getPostList = (state: RootState) => state.posts.postList;
export const getIsLoadingPosts = (state: RootState) => state.posts.isLoading;
export const getIsErrorPosts = (state: RootState) => state.posts.isError;
export const getPostById = (state: RootState, postId: number) =>
  state.posts.postList.find(post => post.id === postId);
