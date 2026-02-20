import { Card, CardBody } from "@heroui/card";
import { PlayIcon } from "lucide-react";

const UserStatsCard = () => {
  return (
    <Card fullWidth>
      <CardBody className="flex-row gap-3 items-center">
        <PlayIcon />
        <div>
          <h2>0</h2>
          <p>Played</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default UserStatsCard;
