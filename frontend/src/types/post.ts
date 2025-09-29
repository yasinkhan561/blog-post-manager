export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  image_url?: string | null;
  published_at?: string | null;
  created_at?: string;
  updated_at?: string;
}

export interface PostPayload {
  title: string;
  content: string;
  author: string;
  image_url?: File | string | null;
}

export type CreatePostPayload = FormData;
