import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import React from "react";

const BenefitsCard = ({
  imageSrc,
  heading,
  content,
}: {
  imageSrc: string;
  heading: string;
  content: string;
}) => {
  return (
    <Card className="bg-transparent" shadow="none">
      <CardBody className="flex-row ">
        <div className="w-2/4">
          <Image height={60} src={imageSrc} width={60} />
        </div>
        <div className="flex flex-col gap-1">
          <h2>{heading}</h2>
          <p className="text-[.8rem]">{content}</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default BenefitsCard;
