import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { LucideIcon } from "lucide-react";

import ProgressBarLink from "../progress/progress-link";

interface TournamentFormatCardProps {
  icon?: LucideIcon;
  image?: string;
  header: string;
  content: string;
}

const TournamentFormatCard = ({
  icon: Icon,
  image,
  header,
  content,
}: TournamentFormatCardProps) => {
  return (
    <Card className="bg-transparent " shadow="sm">
      <CardHeader className="pb-0">
        {image ? (
          <ProgressBarLink href="/lol">
            <Image src={image} />
          </ProgressBarLink>
        ) : (
          Icon && <Icon size={35} />
        )}
      </CardHeader>
      <CardBody className="py-0 pt-1 font-bold flex-grow-0">{header}</CardBody>
      <CardFooter className="pt-0 text-sm mt-1">{content}</CardFooter>
    </Card>
  );
};

export default TournamentFormatCard;
