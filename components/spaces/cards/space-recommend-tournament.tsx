"use client";

import { Card, CardBody } from "@heroui/card";
import { PlusIcon, TrophyIcon } from "lucide-react";
import { Button } from "@heroui/button";

import CreateTournament from "./create-tournament";

import { tournaments } from "@/data";
import TournamentListCard from "@/components/cards/game-cards/tournament-list-card";
import ItemsSlider from "@/components/slider";

const SpaceRecommendTournament = ({ spaceName }: { spaceName: string }) => {
  const bool = true;

  return bool ? (
    <>
      <div>
        <h2 className="text-xl mb-4 font-bold">Recommended Tournaments</h2>
        <div className="lg:flex hidden items-stretch gap-3 my-7">
          {tournaments.slice(0, 3).map((tournament) => (
            <TournamentListCard
              key={tournament.id}
              isLadder={false}
              tournament={tournament}
            />
          ))}
        </div>
        <ItemsSlider>
          {tournaments.map((tournament) => (
            <TournamentListCard
              key={tournament.id}
              isLadder={false}
              tournament={tournament}
            />
          ))}
        </ItemsSlider>
      </div>
    </>
  ) : (
    <>
      <Card className="mt-3" shadow="none">
        <CardBody className="items-center py-10  gap-2">
          <TrophyIcon size={50} />
          <h2 className="text-xl font-bold">No tournaments</h2>
          <p>{spaceName} has no upcoming tournaments.</p>
          <CreateTournament
            renderPressable={(onPress) => (
              <Button
                color="primary"
                radius="full"
                startContent={<PlusIcon />}
                onPress={onPress}
              >
                Create Tournament
              </Button>
            )}
            spaceName={spaceName}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default SpaceRecommendTournament;
