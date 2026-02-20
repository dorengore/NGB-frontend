"use client";

import { Input } from "@heroui/input";
import React, { useState } from "react";

import GameCard from "./cards/game-card";
import type { Game } from "@/types/interface";

const Games = ({
  className,
  isModal,
  onSelectGame,
  games,
}: {
  isModal?: boolean;
  className?: string;
  onSelectGame?: (game: Game) => void;
  games: Game[];
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-4xl mb-6">Games</h2>
      <Input
        labelPlacement="outside"
        placeholder="Search for games"
        size="lg"
        variant="bordered"
        onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
      />
      <div className={`grid gap-4 mt-8 ${className}`}>
        {filteredGames.length > 0 ? (
          filteredGames.map((game: Game) => (
            <GameCard
              key={game.id}
              game={game}
              isModal={isModal}
              onSelectGame={onSelectGame}
            />
          ))
        ) : (
          <p>No games found</p>
        )}
      </div>
    </div>
  );
};

export default Games;
