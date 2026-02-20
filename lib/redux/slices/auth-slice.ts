import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { setCookie, deleteCookie } from "cookies-next";

import { authApi, type AuthResponse, type User } from "../api";

interface AuthState {
  userId: number | null;
  token: string | null;
  imageData: string | null;
  bannerData: string | null;
  username: string | null;
}

const initialState: AuthState = {
  // userId: typeof window !== "undefined" ? localStorage.getItem("userId") : null,
  // token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
  userId: null,
  token: null,
  imageData: null,
  username: "",
  bannerData: null,
};

interface UserBanner {
  bannerImage: string;
}

interface UserProfile {
  profileImage: string;
}

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    setUser: (state, action: PayloadAction<AuthState>) => {
      const { userId, token, imageData, username, bannerData } = action.payload;

      state.userId = userId;
      state.token = token;
      state.imageData = imageData;
      state.username = username;
      state.bannerData = bannerData;
    },
    setUserBanner: (state, action: PayloadAction<UserBanner>) => {
      state.bannerData = action.payload.bannerImage;
    },

    setUserProfile: (state, action: PayloadAction<UserProfile>) => {
      state.imageData = action.payload.profileImage;
    },

    logoutUser: (state) => {
      state.bannerData = null;
      state.imageData = null;
      state.token = null;
      state.userId = null;
      state.username = null;

      const keysToRemove = ["token", "userId", "imageData", "username"];

      keysToRemove.forEach((key) => localStorage.removeItem(key));

      deleteCookie("token");
      deleteCookie("userId");
    },
  },
  extraReducers: (builder) => {
    builder
      // Login matcher
      .addMatcher(
        authApi.endpoints.login.matchFulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          // state.user = action.payload.user;
          state.userId = action.payload.user.id;
          state.token = action.payload.token;
          state.imageData = action.payload.user.imageData;
          state.username = action.payload.user.username;
          state.bannerData = action.payload.user.bannerData;

          localStorage.setItem("token", action.payload.token);
          localStorage.setItem("userId", `${action.payload.user.id}`);
          localStorage.setItem("imageData", `${action.payload.user.imageData}`);
          localStorage.setItem("username", `${action.payload.user.username}`);
          localStorage.setItem(
            "bannerData",
            `${action.payload.user.bannerData}`
          );
          setCookie("token", action.payload.token, {
            maxAge: 30 * 24 * 60 * 60,
          });
          setCookie("userId", action.payload.user.id, {
            maxAge: 30 * 24 * 60 * 60,
          });
        }
      )
      // signup matcher
      .addMatcher(
        authApi.endpoints.signup.matchFulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          // @ts-ignore
          state.token = action.payload.token;
          state.userId = action.payload.user.id;
          state.imageData = action.payload.user.imageData;
          state.username = action.payload.user.username;
          state.bannerData = action.payload.user.bannerData;

          localStorage.setItem("userId", `${action.payload.user.id}`);
          localStorage.setItem("token", action.payload.token);
          localStorage.setItem("imageData", `${action.payload.user.imageData}`);
          localStorage.setItem(
            "bannerData",
            `${action.payload.user.bannerData}`
          );
          localStorage.setItem("username", `${action.payload.user.username}`);
          setCookie("token", action.payload.token, {
            maxAge: 30 * 24 * 60 * 60,
          });
          setCookie("userId", action.payload.user.id, {
            maxAge: 30 * 24 * 60 * 60,
          });
        }
      )
      //  get user matcher
      .addMatcher(
        authApi.endpoints.getCurrentUser.matchFulfilled,
        (state, action: PayloadAction<User>) => {
          state.userId = action.payload.id;
        }
      )
      // Logout matcher
      .addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
        state.userId = null;
        state.token = null;
        state.username = null;
        state.imageData = null;
        state.bannerData = null;

        localStorage.removeItem("token");
        localStorage.remove("userId");
        localStorage.remove("imageData");
        localStorage.remove("bannerData");
        localStorage.remove("username");
        deleteCookie("token");
        deleteCookie("userId");
      });
  },
});

export const { setUser, logoutUser, setUserProfile } = authSlice.actions;

export default authSlice.reducer;
