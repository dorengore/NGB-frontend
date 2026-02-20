import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { RootState } from "../store";

export interface Space {
  name: string;
  description: string | undefined;
  category: string | undefined;
  url: string;
  id: number;
  isActive: boolean;
  adminId: number;
  imageData: string | null;
  bannerData: string | null;
}

export interface CreateSpaceRequest {
  name: string;
  url: string;
  description: string | undefined;
  category: string | undefined;
  imageData: string | undefined;
  bannerData: string | undefined;
}

export interface JoinedSpacesResponse {
  spaces: Space[];
}

export const spaceApi = createApi({
  reducerPath: "spaceApi",
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
    // create space
    createSpace: builder.mutation<Space, CreateSpaceRequest>({
      query: (spaceData) => ({
        url: "/spaces",
        method: "POST",
        body: spaceData,
      }),
    }),
    // getAll Spaces
    getAllSpaces: builder.query<Space[], void>({
      query: () => "/spaces/all",
    }),
    // getJoined Spaces
    getJoinedSpaces: builder.query<JoinedSpacesResponse, void>({
      query: () => "/spaces/joined",
    }),
    // getSpaceById
    getSpaceById: builder.query<Space, number>({
      query: (id) => `/spaces/${id}`,
    }),
    // become a member
    becomeMember: builder.mutation<void, number>({
      query: (spaceId) => ({
        url: `/spaces/${spaceId}/join`,
        method: "POST",
      }),
    }),
    // edit space
    editSpace: builder.mutation<Space, { id: number; updates: Partial<Space> }>(
      {
        query: ({ id, updates }) => ({
          url: `/spaces/${id}`,
          method: "PUT",
          body: updates,
        }),
      },
    ),
    // deactivate space
    deactivateSpace: builder.mutation<void, number>({
      query: (id) => ({
        url: `/spaces/${id}/deactivate`,
        method: "PUT",
      }),
    }),
    // get about space
    getAboutSpace: builder.query<{ description: string }, number>({
      query: (id) => `/spaces/${id}/about`,
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useCreateSpaceMutation,
  useGetAllSpacesQuery,
  useGetJoinedSpacesQuery,
  useGetSpaceByIdQuery,
  useBecomeMemberMutation,
  useEditSpaceMutation,
  useDeactivateSpaceMutation,
  useGetAboutSpaceQuery,
} = spaceApi;
