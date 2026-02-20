import { cookies } from "next/headers";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import Link from "next/link";
import { Button } from "@heroui/button";

import { apiRequest } from "@/lib/utils/api-request";
import type { TournamentResponseInterface } from "@/types/interface";
import ProgressBarLink from "@/components/progress/progress-link";

const getUserTournaments = async (
  token: string
): Promise<TournamentResponseInterface | null> => {
  try {
    const response = await apiRequest("/tournaments", "GET", token);
    return response;
  } catch (error) {
    console.error("Error fetching tournaments:", error);
    return null;
  }
};

export const revalidate = 0;

const UserTournaments = async () => {
  try {
    const cookiesStore = cookies();
    const token = cookiesStore.get("token")?.value;

    if (!token) {
      return (
        <div className="flex flex-col gap-3 mt-20 items-center justify-center">
          <h2 className="text-2xl">Please Login to get your tournaments.</h2>
          <Button as={Link} href="/login">
            Login
          </Button>
        </div>
      );
    }

    const userTournaments = await getUserTournaments(token);

    if (!userTournaments || userTournaments?.message) {
      return (
        <div className="flex flex-col gap-3 mt-20 items-center justify-center">
          <h2 className="text-2xl text-red-500">Failed to load tournaments.</h2>
          <p>Please check your connection or try again later.</p>
          <Button as={Link} href="/">
            Home
          </Button>
        </div>
      );
    }

    const { tournament } = userTournaments;

    if (!tournament) {
      return (
        <div className="p-3 text-center">
          <h2 className="text-2xl">No Tournaments Found</h2>
          <p>It seems you haven&apos;t created any tournaments yet.</p>
        </div>
      );
    }

    return (
      <div className="px-6">
        <h2 className="text-4xl font-bold py-3">Your Tournaments</h2>
        <div className="mb-4">
          <h2 className="text-xl font-bold mt-6 mb-2">Hosting</h2>
          <p>These tournaments are hosted by you.</p>
        </div>
        <h2 className="font-bold mb-2">Setup</h2>
        <Card className="max-w-sm h-[250px] bg-transparent" shadow="none">
          <CardHeader className="p-0">
            <Image
              className="h-[170px] object-cover w-[320px]"
              src={tournament.space.bannerData || "/assets/images/lolt1.jpeg"}
              alt="Tournament banner"
            />
          </CardHeader>
          <CardBody>
            <div className="flex gap-2">
              <ProgressBarLink
                href={`/s/${tournament.space.url}/tournaments/${tournament.id}`}
              >
                <Image
                  alt="Space image"
                  height={50}
                  radius="full"
                  src={`${tournament.space.imageData}`}
                  width={50}
                />
              </ProgressBarLink>
              <ProgressBarLink
                href={`/s/${tournament.space.url}/tournaments/${tournament.id}`}
              >
                {tournament.name}
              </ProgressBarLink>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  } catch (error) {
    return (
      <div className="flex flex-col gap-3 mt-20 items-center justify-center">
        <h2 className="text-2xl text-red-500">Failed to load tournaments.</h2>
        <p>Please check your connection or try again later.</p>
        <Button as={Link} href="/">
          Home
        </Button>
      </div>
    );
  }
};

export default UserTournaments;
