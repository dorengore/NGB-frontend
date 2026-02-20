import { LucideIcon } from "lucide-react";

const NoNotifications = ({
  icon: Icon,
  heading,
  content,
}: {
  icon: LucideIcon;
  heading: string;
  content: string;
}) => {
  return (
    <>
      <Icon size={50} />
      <h2 className="text-xl font-bold">{heading}</h2>
      <p className="text-tiny">{content}</p>
    </>
  );
};

export default NoNotifications;
