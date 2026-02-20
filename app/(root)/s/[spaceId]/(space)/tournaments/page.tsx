"use client";
import { Divider } from "@heroui/divider";
import { Card, CardBody } from "@heroui/card";
import { PlusIcon } from "lucide-react";

import TournamentFilters from "@/components/tournament-filters";
import CreateTournament from "@/components/spaces/cards/create-tournament";

const TournamentsPage = () => {
  return (
    <section className="w-full px-3">
      <TournamentFilters />
      <Divider />
      <CreateTournament
        renderPressable={(onPress) => {
          return (
            <Card
              fullWidth
              isPressable
              className="mt-6 bg-transparent border-dotted border-gray-600 border-2"
              shadow="none"
              onPress={onPress}
            >
              <CardBody className="flex-row items-center gap-4">
                <div className="w-[50px] h-[50px] rounded-full bg-blue-gray-800 flex items-center justify-center">
                  <PlusIcon />
                </div>
                <div>
                  <h2>Create Tournament</h2>
                  <p>Create a tournament fot your community</p>
                </div>
              </CardBody>
            </Card>
          );
        }}
        spaceName="my-space-name"
      />
    </section>
  );
};

export default TournamentsPage;
