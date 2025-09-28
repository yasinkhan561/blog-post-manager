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

export type CreatePostPayload = FormData;
