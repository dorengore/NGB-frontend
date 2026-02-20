import { Card, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";
import { LucideIcon } from "lucide-react";
import React from "react";

const DirectionCard = ({
  icon: Icon,
  heading,
  content,
  href,
  linkText,
  className,
}: {
  icon: LucideIcon;
  heading: string;
  content: string;
  href?: string;
  linkText: string;
  className?: string;
}) => {
  return (
    <Card fullWidth className={`p-10 ${className}`}>
      <CardBody>
        <Icon size={50} />
        <div className="flex flex-col gap-5 mt-6">
          <h2 className="text-3xl font-bold">{heading}</h2>
          <p>{content}</p>
          <Link href={href}>{linkText}</Link>
        </div>
      </CardBody>
    </Card>
  );
};

export default DirectionCard;
