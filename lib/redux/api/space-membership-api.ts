import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { RootState } from "../store";

import { JoinedSpacesResponse, Space } from "./space-api";

interface MembershipResponse {
  joined: boolean;
}

export const spaceMembershipApi = createApi({
  reducerPath: "spaceMembershipApi",
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
  tagTypes: ["SpaceMembership"],
  endpoints: (builder) => ({
    getUserJoinedSpaces: builder.query<Space[], void>({
      query: () => ({
        url: "/spaces/joined",
        method: "GET",
      }),
      transformResponse: (response: JoinedSpacesResponse) => response.spaces,
    }),

    checkMembership: builder.query<boolean, string>({
      query: (spaceId) => ({
        url: `/spaces/${spaceId}/check-membership`,
        method: "GET",
      }),
      transformResponse: (response: MembershipResponse) => response.joined,
      providesTags: (result, error, spaceId) => [
        { type: "SpaceMembership", id: spaceId },
      ],
    }),

    joinSpace: builder.mutation<void, string>({
      query: (spaceId) => ({
        url: `/spaces/${spaceId}/join`,
        method: "POST",
      }),
      invalidatesTags: (result, error, spaceId) => [
        { type: "SpaceMembership", id: spaceId },
      ],
    }),
    leaveSpace: builder.mutation<void, string>({
      query: (spaceId) => ({
        url: `/spaces/${spaceId}/leave`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, spaceId) => [
        { type: "SpaceMembership", id: spaceId },
      ],
    }),
  }),
});

export const {
  useCheckMembershipQuery,
  useGetUserJoinedSpacesQuery,
  useJoinSpaceMutation,
  useLeaveSpaceMutation,
} = spaceMembershipApi;
