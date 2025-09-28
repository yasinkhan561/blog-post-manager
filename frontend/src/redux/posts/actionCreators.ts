import { AppDispatch } from "@/redux/store";
import api from "@/api/index";
import { Post, CreatePostPayload } from "@/types/post";
import {
  setPostList,
  addPost,
  updatePost,
  deletePostById,
  setIsLoading,
  setIsError,
} from "./index";

// Fetch posts
export const fetchPosts = () => async (dispatch: AppDispatch) => {
  dispatch(setIsLoading(true));
  dispatch(setIsError(false));
  try {
    const response = await api.get<{ data: Post[] }>("/posts");
    dispatch(setPostList(response.data.data));
  } catch (error) {
    dispatch(setIsError(true));
  } finally {
    dispatch(setIsLoading(false));
  }
};

// Create post
export const createPostAction =
  (payload: CreatePostPayload) => async (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true));
    dispatch(setIsError(false));
    try {
      const response = await api.post<{ data: Post }>("/posts", payload);
      dispatch(addPost(response.data.data));
      // 💡 FIX 1: Return the expected success object
      return { success: true, data: response.data.data };
    } catch (error) {
      dispatch(setIsError(true));
      return { success: false, errors: error };
    } finally {
      dispatch(setIsLoading(false));
    }
  };

// Update post
export const updatePostAction =
  (id: number, payload: Partial<Post>) => async (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true));
    dispatch(setIsError(false));
    try {
      const response = await api.put<{ data: Post }>(`/posts/${id}`, payload);
      dispatch(updatePost(response.data.data));
    } catch (error) {
      dispatch(setIsError(true));
    } finally {
      dispatch(setIsLoading(false));
    }
  };

// Delete post
export const deletePostAction =
  (id: number) => async (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true));
    dispatch(setIsError(false));
    try {
      await api.delete(`/posts/${id}`);
      dispatch(deletePostById(id));
    } catch (error) {
      dispatch(setIsError(true));
    } finally {
      dispatch(setIsLoading(false));
    }
  };
