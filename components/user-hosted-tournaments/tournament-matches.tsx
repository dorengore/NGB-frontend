"use client";
import { useState } from "react";
import { useDisclosure } from "@heroui/modal";

import TournamentMatch from "../cards/tournament-match";
import MatchModal from "../modals/tournament-modals/match-modal";

const TournamentMatches = () => {
  const [selectedMatch, setSelectedMatch] = useState<any | null>(null);
  const { onOpen, onOpenChange, isOpen } = useDisclosure();

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">7 matches</h2>
      <div>
        {/* Replace with real data */}
        <TournamentMatch
          onSelect={(match: any) => {
            setSelectedMatch(match);
            onOpen();
          }}
        />
        <TournamentMatch
          onSelect={(match: any) => {
            setSelectedMatch(match);
            onOpen();
          }}
        />
        <TournamentMatch
          onSelect={(match: any) => {
            setSelectedMatch(match);
            onOpen();
          }}
        />
        <MatchModal
          isOpen={isOpen}
          selectedMatch={selectedMatch}
          onOpenChange={onOpenChange}
        />
      </div>
    </div>
  );
};

export default TournamentMatches;
