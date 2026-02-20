import type { ReactNode } from "react";
import { cookies } from "next/headers";
import Link from "next/link";
import { Button } from "@heroui/button";

import GameHeader from "@/components/game-header";
import GameTabs from "@/components/tabs/game-tabs";
import { apiRequest } from "@/lib/utils/api-request";

const fetchGame = async (token: string, gameName: string) => {
  const response = await apiRequest(`/games/${gameName}`, "GET", token);
  return response;
};

export const revalidate = 0;

const GameLayout = async ({
  params,
  children,
}: {
  children: ReactNode;
  params: { game: string };
}) => {
  const cookiesStore = cookies();
  const token = cookiesStore.get("token")?.value;

  if (!token) {
    return (
      <div className="flex flex-col gap-3 mt-20 items-center justify-center">
        <h2 className="text-2xl">Please Log In</h2>
        <Button as={Link} href="/login">
          Login
        </Button>
      </div>
    );
  }

  try {
    const gameResponse = await fetchGame(token, params.game);
    const game = gameResponse.games[0];

    if (!game) {
      return (
        <div className="flex flex-col gap-3 mt-20 items-center justify-center">
          <h2 className="text-2xl">No Game Found</h2>
          <Button as={Link} href="/">
            Home
          </Button>
        </div>
      );
    }

    return (
      <div className="w-full">
        <GameHeader
          backgroundImage={game.bannerUrl}
          gameLogo={game.imageUrl}
          gameName="League of legends"
        />
        <GameTabs gameName={params.game} />

        <div>{children}</div>
      </div>
    );
  } catch (error) {
    return (
      <div className="flex flex-col gap-3 mt-20 items-center justify-center">
        <h2 className="text-2xl text-red-500">
          Error fetching game details. Please try again later.
        </h2>
        <Button as={Link} href="/">
          Home
        </Button>
      </div>
    );
  }
};

export default GameLayout;
