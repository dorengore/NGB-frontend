"use client";

import { ReactNode, useEffect } from "react";

import { useAppDispatch } from "@/lib/redux/hooks";
import {
  CurrentTournamentState,
  setCurrentTournament,
} from "@/lib/redux/slices/current-tournament-slice";

interface CurrentTournamentProviderProps {
  tournament: CurrentTournamentState;
  children: ReactNode;
}

const CurrentTournamentProvider = ({
  tournament,
  children,
}: CurrentTournamentProviderProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrentTournament(tournament));
  }, [dispatch, tournament]);

  return <>{children}</>;
};

export default CurrentTournamentProvider;
