import React, { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

import LinkButton from "./link-button";

const UserMenuButton = ({
  href,
  children,
  icon: Icon,
}: {
  href: string;
  children: ReactNode;
  icon: LucideIcon;
}) => {
  return (
    <LinkButton className="justify-start py-10" href={href} variant="bordered">
      <div className="gap-8  flex-col items-center">
        <Icon />
        <h2 className="mt-3 text-xl">{children}</h2>
      </div>
    </LinkButton>
  );
};

export default UserMenuButton;
