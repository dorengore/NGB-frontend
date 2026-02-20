import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CurrentTournamentState {
  id: number | null;
  playersCount: number;
  status: string;
  name: string;
  tournamentTime: string;
  spaceId: number | null;
  gameId: number | null;
  hostedById: number | null;
}

const initialState: CurrentTournamentState = {
  id: null,
  name: "",
  playersCount: 0,
  status: "",
  tournamentTime: "",
  spaceId: null,
  gameId: null,
  hostedById: null,
};

const currentTournament = createSlice({
  name: "currentTournament",
  initialState,
  reducers: {
    setCurrentTournament: (
      state,
      action: PayloadAction<CurrentTournamentState>
    ) => {
      const {
        gameId,
        hostedById,
        id,
        playersCount,
        spaceId,
        name,
        status,
        tournamentTime,
      } = action.payload;

      state.gameId = gameId;
      state.hostedById = hostedById;
      state.id = id;
      state.playersCount = playersCount;
      state.spaceId = spaceId;
      state.name = name;
      state.status = status;
      state.tournamentTime = tournamentTime;
    },
  },
});

export const { setCurrentTournament } = currentTournament.actions;

export default currentTournament.reducer;
