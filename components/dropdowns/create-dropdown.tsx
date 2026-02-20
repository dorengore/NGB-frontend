"use client";

import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@heroui/dropdown";
import { JoystickIcon } from "lucide-react";

const CreateDropdown = () => {
  return (
    <Dropdown placement="left-start">
      <DropdownTrigger>
        <Button fullWidth className="px-5 text-sm" radius="full">
          Create
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Dropdown menu with description"
        className="w-[390px]"
      >
        <DropdownSection title={"Create"}>
          <DropdownItem
            key="create-tournament"
            description="Create tournaments for your friends and community."
            startContent={
              <div className="w-[70px] h-[55px] flex items-center justify-center rounded-full bg-blue-gray-900">
                <JoystickIcon />
              </div>
            }
          >
            <h2 className="text-lg font-bold"> Tournament</h2>
          </DropdownItem>
          <DropdownItem
            key="custom-game "
            className="  gap-4"
            description="Challenge your friends in custom games."
            startContent={
              <div className="w-[70px] h-[55px] flex items-center justify-center rounded-full bg-blue-gray-900">
                <JoystickIcon />
              </div>
            }
          >
            <h2 className="text-lg font-bold">Custom game</h2>
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

export default CreateDropdown;
