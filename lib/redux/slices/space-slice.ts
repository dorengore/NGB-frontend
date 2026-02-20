import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Space } from "../api/space-api";

interface SpaceState {
  spaces: Space[];
  userJoinedSpaces: Space[];
  currentSpace: Space | null;
  isLoading: boolean;
  userManagedSpaces: Space[];
}

const initialState: SpaceState = {
  spaces: [],
  currentSpace: null,
  userJoinedSpaces: [],
  isLoading: false,
  userManagedSpaces: [],
};

const spaceSlice = createSlice({
  name: "space",
  initialState,
  reducers: {
    setSpaces: (state, action: PayloadAction<Space[]>) => {
      state.spaces = action.payload;
    },
    setUserJoinedSpaces: (state, action: PayloadAction<Space[]>) => {
      state.userJoinedSpaces = action.payload;
    },
    clearUserJoinedSpaces: (state) => {
      state.userJoinedSpaces = [];
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setUserManagedSpaces: (state, action: PayloadAction<Space[]>) => {
      state.userManagedSpaces = action.payload;
    },
    // not needed / never used
    addSpace: (state, action: PayloadAction<Space>) => {
      state.spaces.push(action.payload);
    },
    updateSpace: (state, action: PayloadAction<Space>) => {
      const index = state.spaces.findIndex(
        (space) => space.id === action.payload.id
      );

      if (index !== -1) {
        state.spaces[index] = action.payload;
      }
    },
    setCurrentSpace: (state, action: PayloadAction<Space>) => {
      state.currentSpace = action.payload;
    },
    clearCurrentSpace: (state) => {
      state.currentSpace = null;
    },
  },
});

export const {
  setSpaces,
  addSpace,
  updateSpace,
  setCurrentSpace,
  clearCurrentSpace,
  setUserJoinedSpaces,
  setUserManagedSpaces,
  setLoading,
  clearUserJoinedSpaces,
} = spaceSlice.actions;

export default spaceSlice.reducer;
