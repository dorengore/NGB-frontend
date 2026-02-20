import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { LucideIcon } from "lucide-react";

const DownloadCard = ({
  icon,
  platformImage,
  platformName,
  qrCode: QrCode,
}: {
  icon: string;
  platformName: string;
  qrCode: LucideIcon;
  platformImage: string;
}) => {
  return (
    <Card>
      <CardBody className="py-0 pt-9 items-center gap-10">
        <Image alt={platformName} height={50} src={icon} width={50} />
        <h2 className="text-3xl font-bold">{platformName}</h2>
        <QrCode size={150} />
        <Image alt={platformName} src={platformImage} />
      </CardBody>
    </Card>
  );
};

export default DownloadCard;
