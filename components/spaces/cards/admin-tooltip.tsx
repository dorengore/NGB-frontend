import { Avatar } from "@heroui/avatar";
import { Card, CardHeader, CardFooter } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";

interface AdminTooltipProps {
  spaceAdmin: {
    id: number;
    username: string;
    email: string;
    imageData: string | null;
  };
}

const AdminTooltip = ({ spaceAdmin }: AdminTooltipProps) => {
  return (
    <Card className="max-w-[340px]" shadow="none">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Link href="">
            <Avatar
              isBordered
              className="w-[70px] h-[70px]"
              radius="full"
              src={`${spaceAdmin?.imageData}`}
            />
          </Link>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small mb-2 font-semibold leading-none capitalize text-default-600">
              {spaceAdmin.username}
            </h4>
            <Chip color="primary" size="sm">
              <h5 className="text-small tracking-tight ">Admin</h5>
            </Chip>
          </div>
        </div>
      </CardHeader>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Played</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Winrate</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Reputation</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AdminTooltip;
