import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { MoreHorizontal, SettingsIcon } from "lucide-react";
import React from "react";

const Settings = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly radius="full" variant="flat">
          <MoreHorizontal />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Actions">
        <DropdownItem key="notification-settings" className="p-0">
          <Button
            fullWidth
            className="justify-start"
            radius="sm"
            startContent={<SettingsIcon />}
            variant="flat"
          >
            Settings
          </Button>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default Settings;
