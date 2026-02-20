import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@heroui/dropdown";
import {
  ChevronDownIcon,
  UserIcon,
  SettingsIcon,
  UsersIcon,
  GroupIcon,
  BoxIcon,
  TrophyIcon,
  GamepadIcon,
  LogOutIcon,
} from "lucide-react";

import ProgressBarLink from "../progress/progress-link";

import { useAppDispatch } from "@/lib/redux/hooks";
import { logoutUser } from "@/lib/redux/slices/auth-slice";

const SettingsDropdown = ({ userId }: { userId: number | null }) => {
  const dispatch = useAppDispatch();

  const dropdownSections = [
    {
      title: "User",
      items: [
        {
          href: `/users/${userId}`,
          key: "profile",
          label: "Profile",
          icon: <UserIcon size={18} />,
        },
        {
          href: `/user/settings/personal`,
          key: "settings",
          label: "Settings",
          icon: <SettingsIcon size={18} />,
        },
      ],
    },
    {
      title: "Social",
      items: [
        {
          href: "/user/friends",
          key: "friends",
          label: "Friends",
          icon: <UsersIcon size={18} />,
        },
        {
          href: "/user/teams",
          key: "teams",
          label: "Teams",
          icon: <GroupIcon size={18} />,
        },
        {
          href: "/user/spaces",
          key: "spaces",
          label: "Spaces",
          icon: <BoxIcon size={18} />,
        },
        {
          href: "/user/tournaments",
          key: "tournaments",
          label: "Tournaments",
          icon: <TrophyIcon size={18} />,
        },
        {
          href: "/games",
          key: "games",
          label: "Games",
          icon: <GamepadIcon size={18} />,
        },
        // {
        //   href: "/chat",
        //   key: "chat",
        //   label: "Chat",
        //   icon: <MessageCircle size={18} />,
        // },
        // {
        //   href: "/notifications",
        //   key: "notifications",
        //   label: "Notifications",
        //   icon: <BellIcon size={18} />,
        // },
      ],
    },
    {
      title: "Logout",
      items: [
        {
          href: "/",
          key: "logout",
          label: "Logout",
          icon: <LogOutIcon size={18} />,
        },
      ],
    },
  ];

  return (
    <Dropdown
      showArrow
      className="bg-custom-gradient"
      classNames={{
        base: "before:bg-default-200",
        content: "p-0 border-small border-divider ",
      }}
      radius="sm"
    >
      <DropdownTrigger>
        <Button isIconOnly radius="full" size="sm" variant="bordered">
          <ChevronDownIcon size={18} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Settings Dropdown"
        className="p-2"
        itemClasses={{
          base: [
            "rounded-md",
            "text-default-500",
            "transition-opacity",
            "data-[hover=true]:text-foreground",
            "data-[hover=true]:bg-default-100",
            "dark:data-[hover=true]:bg-default-50",
            "data-[selectable=true]:focus:bg-default-50",
            "data-[pressed=true]:opacity-70",
            "data-[focus-visible=true]:ring-default-500",
          ],
        }}
        variant="flat"
      >
        {dropdownSections.map((section) => (
          <DropdownSection key={section.title} showDivider>
            {section.items.map((item) => (
              <DropdownItem key={item.key} className="p-0 mb-2">
                {section.title !== "Logout" ? (
                  <ProgressBarLink
                    className=" flex p-1 items-center px-3 gap-2 w-full"
                    href={item.href}
                  >
                    <span>{item.icon}</span> <span>{item.label}</span>
                  </ProgressBarLink>
                ) : (
                  <button
                    className="flex rounded-md text-md text-white justify-start gap-2 p-1 px-3 items-center"
                    onClick={() => dispatch(logoutUser())}
                  >
                    <span>{item.icon}</span> <span>Logout</span>
                  </button>
                )}
              </DropdownItem>
            ))}
          </DropdownSection>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default SettingsDropdown;
