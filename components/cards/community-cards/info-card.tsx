import { Card, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";
import { LucideIcon } from "lucide-react";

const InfoCard = ({
  icon: Icon,
  heading,
  text,
  showShadow,
  bgTransparent,
  className,
  link,
  linkText,
}: {
  text: string;
  heading: string;
  icon: LucideIcon;
  showShadow?: boolean;
  bgTransparent?: boolean;
  className?: string;
  link?: string;
  linkText?: string;
}) => {
  return (
    <Card
      className={`${bgTransparent ? "bg-transparent" : ""} ${className}`}
      shadow={showShadow ? "md" : "none"}
    >
      <CardBody className="text-center items-center gap-4 px-8">
        <Icon size={50} />
        <h2 className="text-2xl font-bold">{heading}</h2>
        <p>{text}</p>
        {link && <Link href={link}>{linkText}</Link>}
      </CardBody>
    </Card>
  );
};

export default InfoCard;
