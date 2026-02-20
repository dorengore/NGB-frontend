import { configureStore } from "@reduxjs/toolkit";

import { authApi } from "./api";
import { spaceApi } from "./api/space-api";
import { feedApi } from "./api/feed-api";
import { spaceMembershipApi } from "./api/space-membership-api";

import authReducer from "@/lib/redux/slices/auth-slice";
import spaceReducer from "@/lib/redux/slices/space-slice";
import currentSpaceReducer from "@/lib/redux/slices/current-space-slice";
import currentTournamentReducer from "@/lib/redux/slices/current-tournament-slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [authApi.reducerPath]: authApi.reducer,
      [spaceApi.reducerPath]: spaceApi.reducer,
      [feedApi.reducerPath]: feedApi.reducer,
      [spaceMembershipApi.reducerPath]: spaceMembershipApi.reducer,
      auth: authReducer,
      space: spaceReducer,
      currentSpace: currentSpaceReducer,
      currentTournament: currentTournamentReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        authApi.middleware,
        feedApi.middleware,
        spaceApi.middleware,
        spaceMembershipApi.middleware
      ),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
