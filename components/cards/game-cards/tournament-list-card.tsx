import React from "react";
import { Avatar } from "@heroui/avatar";
import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { Tooltip } from "@heroui/tooltip";
import { Chip } from "@heroui/chip";

interface GameTournamentProps {
  isLadder?: boolean;
  tournament: {
    id: number;
    imageUrl: string;
    date: string;
    displayDate: string;
    name: string;
    region: string;
    format: string;
    prizePool: string;
    slots: number;
    host: {
      name: string;
      avatar: string;
    };
    isSubscribersOnly: boolean;
    link: string;
  };
}

const TournamentListCard = ({ tournament, isLadder }: GameTournamentProps) => {
  return (
    <Card className="w-full min-w-[300px] bg-transparent" shadow="none">
      <CardBody className="flex p-0 gap-2">
        <div className="">
          {/* <Link href={tournament.link}> */}
          <Image
            alt={tournament.name}
            className="pointer-events-none"
            src={tournament.imageUrl}
          />
          {/* </Link> */}
        </div>
        <div className=" flex px-2 pb-2 items-start gap-4">
          {/* <Tooltip
            className="w-[400px]  h-[250px]"
            content={<GameTooltip />}
            placement="top"
          > */}
          <Avatar size="md" src={tournament.host.avatar} />
          {/* </Tooltip> */}

          <div>
            <Tooltip content={tournament.date}>
              <p className="text-sm text-gray-400">{tournament.displayDate}</p>
            </Tooltip>
            <Link href={tournament.link}>
              <h2 className="text-dm font-bold mt-1">{tournament.name}</h2>
            </Link>
            {/* <div className="flex items-center gap-2 ">
              <span className="text-sm">Hosted by {tournament.host.name}</span>
            </div> */}
            <div className="flex items-center gap-2  text-sm text-gray-400">
              <span>{tournament.region}</span>
              <div className="w-1 h-1 bg-gray-400 rounded-full" />
              <span>{tournament.format}</span>
              <div className="w-1 h-1 bg-gray-400 rounded-full" />
              <span>{tournament.prizePool}</span>
              <div className="w-1 h-1 bg-gray-400 rounded-full" />
              <span>{tournament.slots} slots</span>
            </div>
            {isLadder
              ? null
              : tournament.isSubscribersOnly && (
                  <Tooltip content="You need a subscription to join this competition.">
                    <Chip className="mt-2" color="warning" size="sm">
                      Subscribers Only
                    </Chip>
                  </Tooltip>
                )}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default TournamentListCard;
