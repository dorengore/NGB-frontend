import Games from "@/components/games";
import { Button } from "@heroui/button";
import { cookies } from "next/headers";
import Link from "next/link";

import { apiRequest } from "@/lib/utils/api-request";

const fetchGames = async (token: string) => {
  const response = await apiRequest("/games", "GET", token);
  return response;
};

export const revalidate = 0;

const GamesPage = async () => {
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
    const gameResponse = await fetchGames(token);
    const games = gameResponse.games;

    if (!games || !games.length) {
      return (
        <div>
          <h2>No Games Found</h2>
        </div>
      );
    }

    return (
      <section className="w-full p-5">
        <Games
          games={games}
          className="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        />
      </section>
    );
  } catch (error) {
    return (
      <div className="flex flex-col gap-3 mt-20 items-center justify-center">
        <h2 className="text-2xl text-red-500">Error fetching games.</h2>
        <p>Please try again later.</p>
      </div>
    );
  }
};

export default GamesPage;
