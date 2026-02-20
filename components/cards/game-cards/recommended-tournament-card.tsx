import { Avatar } from "@heroui/avatar";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Image } from "@heroui/image";
import { Tooltip } from "@heroui/tooltip";
import { Link } from "@heroui/link";

const RecommendedTournamentCard = () => {
  return (
    <Card className="bg-transparent" shadow="none">
      <CardBody className="flex p-0 gap-3 flex-row items-center">
        <div className="w-2/4">
          <Link className="" href="">
            <Image
              height={350}
              src="/assets/images/game-bg.jpg"
              style={{
                objectFit: "cover",
              }}
              width={550}
            />
          </Link>
        </div>
        <div className="flex items-start gap-3 flex-col">
          <Tooltip
            closeDelay={1000}
            content={"2024-09-06 23:00 GMT+5"}
            placement="top"
          >
            <h2>Today, 23:00</h2>
          </Tooltip>
          <Link className="" href="">
            <h2 className="text-2xl text-white font-bold">The Arena</h2>
          </Link>
          <div className="flex gap-3 items-center">
            <span>EUNE</span>
            <div className="w-[10px] bg-blue-gray-200 rounded-full h-[10px]" />
            <span>5v5</span>
            <div className="w-[10px] bg-blue-gray-200 rounded-full h-[10px]" />
            <span>€30.00</span>
            <div className="w-[10px] bg-blue-gray-200 rounded-full h-[10px]" />
            <span>32 slots</span>
          </div>
          <div className="flex items-center gap-3">
            {/* <Tooltip
              className="w-[400px] overflow-y-auto h-[250px]"
              content={<GameTooltip />}
              placement="top"
            > */}
            <Avatar size="lg" src="/assets/avatars/6.png" />
            {/* </Tooltip> */}
            <h2>Hosted by</h2>
            {/* <Tooltip
              className="w-[400px] overflow-y-auto h-[250px]"
              content={<GameTooltip />}
              placement="top"
            > */}
            LOL All Stars
            {/* </Tooltip> */}
          </div>
          <Tooltip content="You need a subscription to join this competition.">
            <Chip className="mt-3" color="warning" size="sm">
              Subscribers Only
            </Chip>
          </Tooltip>
        </div>
      </CardBody>
    </Card>
  );
};

export default RecommendedTournamentCard;
