"use client";

import { useState, useEffect } from "react";
import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal";
import Games from "../games";
import { apiRequest } from "@/lib/utils/api-request";
import type { Game } from "@/types/interface";

export interface CreateTournamentModalProps {
  isOpen: boolean;
  gameId?: number;
  onOpenChange: () => void;
  onSelectGame?: (game: Game) => void;
}

const CreateTournamentModal = ({
  isOpen,
  onOpenChange,
  onSelectGame,
}: CreateTournamentModalProps) => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // A simple helper to extract token from document.cookie
  const getTokenFromCookies = () => {
    const tokenCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="));
    return tokenCookie ? tokenCookie.split("=")[1] : null;
  };

  useEffect(() => {
    if (isOpen) {
      const fetchGames = async () => {
        setLoading(true);
        setError(null);

        // Retrieve token from cookies
        const token = getTokenFromCookies();

        if (!token) {
          setError("Please log in to view games.");
          setLoading(false);
          return;
        }

        try {
          const response = await apiRequest("/games", "GET", token);
          const gamesData = response.games;
          if (!gamesData || gamesData.length === 0) {
            setError("No games found.");
          } else {
            setGames(gamesData);
          }
        } catch (err) {
          setError("Error fetching games. Please try again later.");
        } finally {
          setLoading(false);
        }
      };

      fetchGames();
    }
  }, [isOpen]);

  return (
    <>
      <Modal
        backdrop="opaque"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
        isOpen={isOpen}
        radius="lg"
        scrollBehavior="inside"
        size="xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create Tournament
              </ModalHeader>
              <ModalBody>
                {loading && <p>Loading games...</p>}
                {error && <p className="text-red-500">{error}</p>}
                {!loading && !error && games.length > 0 && (
                  <Games
                    games={games}
                    isModal
                    className="grid-cols-3"
                    onSelectGame={onSelectGame}
                  />
                )}
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateTournamentModal;
