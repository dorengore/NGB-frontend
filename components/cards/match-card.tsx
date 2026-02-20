import { Card, CardBody } from "@heroui/card";
import { Users } from "lucide-react";

interface MatchCardProps {
  teamOne: any;
  teamTwo: any;
}

const MatchCard = ({ teamOne, teamTwo }: MatchCardProps) => {
  return (
    <Card>
      <CardBody className=" flex-row justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="border border-dashed rounded-full p-2">
            <Users size={20} />
          </div>
          <h2>To be decided</h2>
        </div>
        <span>{0}</span>
      </CardBody>
    </Card>
  );
};

export default MatchCard;
