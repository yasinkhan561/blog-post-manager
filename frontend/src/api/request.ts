import api from "./index";
import { Post, CreatePostPayload } from "@/types/post";

/**
 * Fetch all posts
 */
export const fetchPostsRequest = async (): Promise<Post[]> => {
  const response = await api.get<{ data: Post[] }>("/posts");
  return response.data.data;
};

/**
 * Create a new post
 */
export const createPostRequest = async (payload: CreatePostPayload): Promise<Post> => {
  const response = await api.post<{ data: Post }>("/posts", payload);
  return response.data.data;
};

/**
 * Update an existing post
 */
export const updatePostRequest = async (id: number, payload: Partial<Post>): Promise<Post> => {
  const response = await api.put<{ data: Post }>(`/posts/${id}`, payload);
  return response.data.data;
};

/**
 * Delete a post
 */
export const deletePostRequest = async (id: number): Promise<void> => {
  await api.delete(`/posts/${id}`);
};
