import { Avatar } from "@heroui/avatar";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Image } from "@heroui/image";
import { Tooltip } from "@heroui/tooltip";

const MarketplaceCard = ({ market }: { market: any }) => {
  return (
    <Card className="w-full min-w-[300px] bg-transparent" shadow="none">
      <CardHeader className="">
        {/* <Link href=""> */}
        <Image
          alt={market.title}
          className="pointer-events-none rounded-xl"
          src={market.image}
        />
        {/* </Link> */}
      </CardHeader>
      <CardBody className="overflow-visible flex-row gap-4">
        <div>
          <Avatar radius="full" size="md" src={market.avatar} />
        </div>
        <div className="flex w-full flex-col gap-1">
          <Tooltip content="Esports Coaching Services">
            <Chip variant="bordered">
              <p className="text-[.6rem] uppercase">{market.category}</p>
            </Chip>
          </Tooltip>
          <h4 className="text-sm">{market.title}</h4>
          <div className="flex justify-between flex-col w-full">
            <p className="text-default-500 text-[.8rem] flex items-center gap-2">
              <span>{market.price.startingAt ? "Starting at " : ""}</span>
              <span>
                {market.price.amount} {market.price.currency}
              </span>
            </p>
            <p className="text-default-500 flex items-center justify-between">
              <span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </span>
              <span>
                {market.rating.score} ({market.rating.count})
              </span>
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default MarketplaceCard;
