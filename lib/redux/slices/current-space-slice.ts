import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CurrentSpaceState {
  id: number | null;
  name: string;
  description: string | undefined;
  category: string | undefined;
  url: string;
  isActive: boolean;
  adminId: number | null;
  imageData: string | null;
  bannerData: string | null;
}

const loadFromLocalStorage = (): CurrentSpaceState => {
  const storedState = localStorage.getItem("currentSpace");

  if (storedState) {
    return JSON.parse(storedState);
  }

  return {
    id: null,
    name: "",
    description: undefined,
    category: undefined,
    url: "",
    isActive: true,
    adminId: null,
    imageData: null,
    bannerData: null,
  };
};

const initialState: CurrentSpaceState = {
  id: null,
  name: "",
  description: undefined,
  category: undefined,
  url: "",
  isActive: true,
  adminId: null,
  imageData: null,
  bannerData: null,
};

const currentSpaceSlice = createSlice({
  name: "currentSpace",
  initialState,
  reducers: {
    setCurrentSpace: (state, action: PayloadAction<CurrentSpaceState>) => {
      state.id = action.payload.id;
      state.adminId = action.payload.adminId;
      state.bannerData = action.payload.bannerData;
      state.category = action.payload.category;
      state.description = action.payload.description;
      state.imageData = action.payload.imageData;
      state.isActive = action.payload.isActive;
      state.name = action.payload.name;
      state.url = action.payload.url;
    },
    clearCurrentSpace: (state) => {
      state.id = null;
    },
  },
});

export const { setCurrentSpace, clearCurrentSpace } = currentSpaceSlice.actions;

export default currentSpaceSlice.reducer;
