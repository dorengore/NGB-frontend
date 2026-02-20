import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Tooltip } from "@heroui/tooltip";
import { InfoIcon } from "lucide-react";

const UserFunds = () => {
  return (
    <div>
      <h2 className="text-gray-400 mt-4 mb-2 text-sm font-semibold">
        Your Funds
      </h2>
      <Card className="bg-transparent border-1" shadow="none">
        <CardHeader className="flex items-center justify-between">
          <h2 className="text-sm">Balance</h2>
          <Tooltip
            className="w-[230px]"
            content={"Learn more about payments on NBG."}
          >
            <InfoIcon size={18} />
          </Tooltip>
        </CardHeader>
        <CardBody className="py-0">
          <h2 className="text-3xl font-bold">0.00</h2>
        </CardBody>
        <CardFooter className="flex gap-3">
          <Button fullWidth color="primary" radius="full">
            Add Funds
          </Button>
          <Button fullWidth radius="full">
            With draw
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UserFunds;
