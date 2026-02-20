import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";

import ProgressBarLink from "../progress/progress-link";

import { UserTeam } from "@/types/interface";

const TeamCard = ({ team }: { team: UserTeam }) => {
  return (
    <Card className="bg-transparent" shadow="none">
      <CardBody className="items-center gap-4">
        <ProgressBarLink href={`/teams/${team.id}`}>
          <Image
            height={120}
            radius="full"
            src={team.imageData ? team.imageData : "/assets/avatars/1.png"}
            width={120}
          />
        </ProgressBarLink>
        <ProgressBarLink href={`/teams/${team.id}`}>
          <h2 className="text-xl">{team.name}</h2>
        </ProgressBarLink>
      </CardBody>
    </Card>
  );
};

export default TeamCard;
