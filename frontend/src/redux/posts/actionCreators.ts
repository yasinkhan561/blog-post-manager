import { AppDispatch } from "@/redux/store";
import api from "@/api/index";
import { Post, CreatePostPayload, PostPayload } from "@/types/post";
import {
  setPostList,
  addPost,
  updatePost,
  deletePostById,
  setIsLoading,
  setIsError,
} from "./index";
import {
  createPostRequest,
  deletePostRequest,
  fetchPostsRequest,
  updatePostRequest,
} from "@/api/request";
import createPost from "@/components/createPost/createPost";

// Fetch posts
export const fetchPosts = () => async (dispatch: AppDispatch) => {
  dispatch(setIsLoading(true));
  dispatch(setIsError(false));
  try {
    const response = await fetchPostsRequest();
    dispatch(setPostList(response));
  } catch (error) {
    dispatch(setIsError(true));
  } finally {
    dispatch(setIsLoading(false));
  }
};

// Create post
export const createPostAction =
  (payload: FormData) => async (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true));
    dispatch(setIsError(false));

    try {
      const response = await createPostRequest(payload);
      dispatch(addPost(response));
      return { success: true, data: response };
    } catch (error) {
      // Handle API errors
      dispatch(setIsError(true));
      return { success: false, error };
    } finally {
      // Always stop loading
      dispatch(setIsLoading(false));
    }
  };

// Update post
export const updatePostAction =
  (id: number, payload: FormData) => async (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true));
    dispatch(setIsError(false));

    try {
      // 1. Call the dedicated API request function
      const response = await updatePostRequest(id, payload);
      dispatch(updatePost(response));
      return { success: true, data: response };
    } catch (error) {
      // Handle API errors
      dispatch(setIsError(true));
      return { success: false, error };
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
      dispatch(deletePostById(id));
      const response = await deletePostRequest(id);
      return { success: true };
    } catch (error) {
      dispatch(setIsError(true));
    } finally {
      dispatch(setIsLoading(false));
    }
  };
