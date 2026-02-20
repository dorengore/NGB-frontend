import type { LucideIcon } from "lucide-react";

const ListItemWithIcon = ({
  icon: Icon,
  content,
}: {
  icon: LucideIcon;
  content: string;
}) => {
  return (
    <li className="grid grid-cols-10 text-[.8rem] gap-10">
      <Icon />
      <span className="col-span-9 ">{content}</span>
    </li>
  );
};

export default ListItemWithIcon;
