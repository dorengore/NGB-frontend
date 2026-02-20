import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { CameraIcon } from "lucide-react";
import { Link } from "@heroui/link";

const AddSpaceVideoCard = ({ spaceName }: { spaceName: string }) => {
  return (
    <Card className="h-full">
      <CardBody className="items-center justify-center gap-4">
        <CameraIcon size={40} />
        <h2>Highlight your Space with a video.</h2>
        <Link href={`/s/${spaceName}/settings/about`}>
          <Button>Add Video</Button>
        </Link>
      </CardBody>
    </Card>
  );
};

export default AddSpaceVideoCard;
