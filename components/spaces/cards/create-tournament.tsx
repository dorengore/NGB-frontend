"use client";

import { useDisclosure } from "@heroui/modal";
import { type ReactNode, useState } from "react";

import CreateTournamentModal from "@/components/modals/create-tournament-modal";
import CreateValorantTournament from "@/components/modals/tournament-modals/create-valorant-tournament";
import CreateLolTournament from "@/components/modals/tournament-modals/create-lol-tournament";
import type { Game } from "@/types/interface";

interface CreateTournamentProps {
  spaceName: string;
  renderPressable: (onPress: () => void) => ReactNode;
}

const CreateTournament = ({
  spaceName,
  renderPressable,
}: CreateTournamentProps) => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const {
    isOpen: isOpenGames,
    onOpen: onOpenGames,
    onOpenChange: onOpenChangeGames,
  } = useDisclosure();
  const {
    isOpen: isOpenSelectedGame,
    onOpen: onOpenSelectedGame,
    onOpenChange: onOpenChangeSelectedGame,
  } = useDisclosure();

  const handleSelectGame = (game: Game) => {
    console.log(game);
    setSelectedGame(game);
    onOpenChangeGames();
    onOpenSelectedGame();
  };

  const renderSelectedGameModal = () => {
    if (!selectedGame) return;

    switch (selectedGame.name) {
      case "lol":
        return (
          <CreateLolTournament
            gameId={selectedGame.id}
            isOpen={isOpenSelectedGame}
            onOpenChange={onOpenChangeSelectedGame}
          />
        );
      case "Valorant":
        return (
          <CreateValorantTournament
            isOpen={isOpenSelectedGame}
            onOpenChange={onOpenChangeSelectedGame}
          />
        );
      default:
        return "";
    }
  };

  return (
    <>
      {renderPressable(onOpenGames)}
      {renderSelectedGameModal()}
      <CreateTournamentModal
        isOpen={isOpenGames}
        onOpenChange={onOpenChangeGames}
        onSelectGame={handleSelectGame}
      />
    </>
  );
};

export default CreateTournament;
