"use client";
import { Button } from "@heroui/button";
import { useDisclosure } from "@heroui/modal";
import { UsersIcon } from "lucide-react";

import CreateTeamModal from "../modals/create-team-modal";

const NoTeams = () => {
  const {
    isOpen: isOpenCreateTeam,
    onOpen: onOpenCreateTeam,
    onOpenChange: onOpenChangeCreateTeam,
  } = useDisclosure();

  return (
    <div className="flex mt-20 flex-col items-center justify-center gap-4">
      <UsersIcon size={40} />
      <h2 className="text-2xl">No teams</h2>
      <p>You are not a member of any team.</p>
      <Button color="primary" radius="full" onPress={onOpenCreateTeam}>
        Create team
      </Button>
      <CreateTeamModal
        isOpen={isOpenCreateTeam}
        onOpenChange={onOpenChangeCreateTeam}
      />
    </div>
  );
};

export default NoTeams;
