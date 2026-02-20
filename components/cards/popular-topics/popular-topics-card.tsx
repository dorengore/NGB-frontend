import { Card, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";
import { LucideIcon } from "lucide-react";

const PopularTopicsCard = ({
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
        <Icon size={40} />
        <div className="flex flex-col  mt-6">
          <h2 className="text-xl font-bold mb-1">{heading}</h2>
          <p className="">{content}</p>
          <Link className="cursor-pointer mt-4" href={href}>
            {linkText}
          </Link>
        </div>
      </CardBody>
    </Card>
  );
};

export default PopularTopicsCard;
