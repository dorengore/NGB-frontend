import {
  createApi,
  fetchBaseQuery,
  RootState,
} from "@reduxjs/toolkit/query/react";

import { FriendRequestInterface, UserFriends } from "@/types/interface";

export interface User {
  id: number;
  username: string;
  email: string;
  imageData: string | null;
  bannerData: string | null;
}

export interface AuthResponse {
  success: string;
  token: string;
  user: {
    id: number;
    email: string;
    username: string;
    imageData: string | null;
    bannerData: string | null;
  };
}

// export interface AuthState {
//   user: User | null;
//   token: string | null;
//   isAuthenticated: boolean;
//   isLoading: boolean;
//   error: string | null;
// }

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignUpCredentials {
  username: string;
  email: string;
  password: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers, { getState }) => {
      // @ts-ignore
      const token = (getState() as RootState).auth.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    //  Login Route
    login: builder.mutation<AuthResponse, LoginCredentials>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    // Signup route
    signup: builder.mutation<AuthResponse, SignUpCredentials>({
      query: (credentials) => ({
        url: "/auth/signup",
        method: "POST",
        body: credentials,
      }),
    }),
    // getCurrent user
    getCurrentUser: builder.query<User, void>({
      query: (userId) => `/auth/user/${userId}`,
    }),
    // getAllUsers
    getAllUsers: builder.query<User[], void>({
      query: () => `/auth/users`,
    }),
    // get user friend requests
    getUserFriendRequests: builder.query<FriendRequestInterface, void>({
      query: () => `/friends/requests`,
    }),
    // get user all friends
    getUserAllFriends: builder.query<UserFriends, void>({
      query: () => "/friends",
    }),
    // Login route
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "auth/logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useLogoutMutation,
  useGetCurrentUserQuery,
  useGetAllUsersQuery,
  useGetUserFriendRequestsQuery,
  useGetUserAllFriendsQuery,
} = authApi;
