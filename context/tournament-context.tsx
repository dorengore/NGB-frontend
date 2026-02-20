import { createContext, FC, ReactNode, useContext, useState } from "react";

interface TournamentContextType {
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
  tournamentName: string;
  setTournamentName: (tournamentName: string) => void;
  tournamentSize: number;
  setTournamentSize: (size: number) => void;
  setTournamentFormat: (format: string) => void;
  tournamentFormat: string;
}

interface TournamentContextProps {
  children: ReactNode;
}

export const TournamentProvider: FC<TournamentContextProps> = ({
  children,
}) => {
  // this context is useless and free to remove it wont break anything.
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [tournamentName, setTournamentName] = useState<string>("");
  const [tournamentSize, setTournamentSize] = useState<number>(5);
  const [tournamentFormat, setTournamentFormat] = useState<string>("");

  const value = {
    selectedRegion,
    setSelectedRegion,
    tournamentName,
    setTournamentName,
    tournamentSize,
    setTournamentSize,
    tournamentFormat,
    setTournamentFormat,
  };

  return (
    <TournamentContext.Provider value={value}>
      {children}
    </TournamentContext.Provider>
  );
};

export const TournamentContext = createContext<
  TournamentContextType | undefined
>(undefined);

export const useTournamentContext = () => {
  const context = useContext(TournamentContext);

  if (!context) {
    throw new Error(
      "useTournamentContext must be used within a TournamentProvider"
    );
  }

  return context;
};
