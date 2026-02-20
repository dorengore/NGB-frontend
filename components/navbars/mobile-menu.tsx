"use client";
import { Listbox, ListboxItem } from "@heroui/listbox";
import {
  CrownIcon,
  Gamepad2,
  NewspaperIcon,
  RocketIcon,
  SearchIcon,
  ShoppingBagIcon,
} from "lucide-react";

import ProgressBarLink from "../progress/progress-link";

const MobileMenu = () => {
  const list = [
    {
      key: "games",
      label: "Games",
      Icon: Gamepad2,
      href: "/games",
    },
    {
      href: "/spaces",
      key: "spaces",
      label: "Spaces",
      Icon: RocketIcon,
    },

    {
      href: "",
      key: "marketplace",
      label: "Marketplace",
      Icon: ShoppingBagIcon,
    },
    {
      href: "/search",
      key: "search",
      label: "Search",
      Icon: SearchIcon,
    },
    {
      href: "",
      key: "upgrade",
      label: "Upgrade to pro",
      Icon: CrownIcon,
    },
    {
      href: "/feed",
      key: "feed",
      label: "Feed",
      Icon: NewspaperIcon,
    },
  ];

  return (
    <Listbox
      aria-label="Menu"
      itemClasses={{
        base: "px-3 w-full first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
      }}
      items={list}
      style={{
        width: "100%",
      }}
    >
      {(item) => (
        <ListboxItem key={item.key}>
          <ProgressBarLink
            className={"w-full flex items-center gap-4 text-white h-full"}
            href={item.href}
          >
            <item.Icon />
            {item.label}
          </ProgressBarLink>
        </ListboxItem>
      )}
    </Listbox>
  );
};

export default MobileMenu;
