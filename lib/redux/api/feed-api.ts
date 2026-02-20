// feedApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { RootState } from "../store";

export interface Post {
  id: number;
  content: string;
  likesCount: number;
  imageData: string;
  status: string;
  authorId: number;
  spaceId: number;
  user: {
    username: string;
  };
}

export interface CreatePostRequest {
  content: string;
  authorId: string;
  spaceId: string;
  imageData: string;
}

export interface PostResponse {
  posts: Post[];
}

export const feedApi = createApi({
  reducerPath: "feedApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Get all posts
    getPosts: builder.query<PostResponse, void>({
      query: () => "/posts/all",
    }),
    // Create a new post
    createPost: builder.mutation<Post, CreatePostRequest>({
      query: (postData) => ({
        url: "/posts",
        method: "POST",
        body: postData,
      }),
    }),
    // Like a post
    likePost: builder.mutation<Post, number>({
      query: (postId) => ({
        url: `/posts/${postId}/like`,
        method: "POST",
      }),
    }),
    // Delete a post
    deletePost: builder.mutation<void, number>({
      query: (postId) => ({
        url: `/posts/${postId}`,
        method: "DELETE",
      }),
    }),
    // Edit a post
    editPost: builder.mutation<Post, { postId: number; content: string }>({
      query: ({ postId, content }) => ({
        url: `/posts/${postId}`,
        method: "PUT",
        body: { content },
      }),
    }),
    // Get posts of user joined spaces
    getPostsOfJoinedSpaces: builder.query<Post[], void>({
      query: () => "/posts/user-joined-spaces-posts",
    }),

    // Get posts of user joined spaces
    getPost: builder.query<Post[], void>({
      query: (postId) => `/posts/${postId}`,
    }),
  }),
});

export const {
  useGetPostsQuery,
  useCreatePostMutation,
  useLikePostMutation,
  useDeletePostMutation,
  useEditPostMutation,
  useGetPostsOfJoinedSpacesQuery,
  useGetPostQuery,
} = feedApi;
