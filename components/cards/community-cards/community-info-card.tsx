import { LucideIcon } from "lucide-react";
import { Image } from "@heroui/image";

import ListItemWithIcon from "@/components/hero-list-item";

interface Item {
  icon: LucideIcon;
  text: string;
}

interface CommunityInfoCardProps {
  heading: string;
  listItems: Item[];
  imgSrc: string;
  className?: string;
}

const CommunityInfoCard = ({
  heading,
  listItems,
  imgSrc,
  className,
}: CommunityInfoCardProps) => {
  return (
    <div
      className={`flex flex-col w-full lg:flex-row items-center px-7 lg:px-14 justify-center gap-10 ${className}`}
    >
      <div className="flex flex-col gap-8 lg:w-2/4">
        <h2 className="lg:text-5xl text-3xl leading-[40px] lg:leading-[60px] font-bold">
          {heading}
        </h2>
        <ul className="flex flex-col gap-6">
          {listItems.map((item, index) => (
            <ListItemWithIcon
              key={index}
              content={item.text}
              icon={item.icon}
            />
          ))}
        </ul>
      </div>
      <div className="lg:w-[70%]">
        <Image src={imgSrc} />
      </div>
    </div>
  );
};

export default CommunityInfoCard;
