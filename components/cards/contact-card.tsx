import { Card, CardBody } from "@heroui/card";
import { LucideIcon } from "lucide-react";

const ContactCard = ({
  icon: Icon,
  heading,
  content,
}: {
  icon: LucideIcon;
  heading: string;
  content: string;
}) => {
  return (
    <Card fullWidth className="p-10">
      <CardBody className="gap-4">
        <Icon size={50} />
        <h2 className="text-xl font-bold">{heading}</h2>
        <p>{content}</p>
      </CardBody>
    </Card>
  );
};

export default ContactCard;
