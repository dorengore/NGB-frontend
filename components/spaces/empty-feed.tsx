import { Card, CardBody } from "@heroui/card";
import { NewspaperIcon } from "lucide-react";

const EmptySpaceFeeds = () => {
  return (
    <Card className="bg-transparent" shadow="none">
      <CardBody className="items-center justify-center gap-2">
        <NewspaperIcon />
        <h2>This feed is empty</h2>
        <p>Nothing to see here yet, please come back later.</p>
      </CardBody>
    </Card>
  );
};

export default EmptySpaceFeeds;
