import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@heroui/dropdown";
import { MoreHorizontalIcon } from "lucide-react";

import ProgressBarLink from "./progress/progress-link";

import type { ReusableDropdownProps } from "@/types/interface";

const DropdownWithSections = ({
  sections,
  triggerComponent,
}: ReusableDropdownProps) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        {triggerComponent || <MoreHorizontalIcon className="cursor-pointer" />}
      </DropdownTrigger>
      <DropdownMenu aria-label="Dropdown " variant="faded">
        {sections.map((section, index) => (
          <DropdownSection
            key={section.title}
            showDivider={index !== sections.length - 1}
            title={section.title}
          >
            {section.items.map((item) => (
              <DropdownItem
                href={item.href ? item.href : ""}
                target={item.target}
                as={ProgressBarLink}
                key={item.key}
                className={`p-2 ${item.className}`}
                color={item.color || "default"}
                variant="solid"
                onPress={() => {
                  if (item.onPress) {
                    item.onPress();
                  }
                }}
              >
                {/* <ProgressBarLink
                  className="p-2 text-white"
                  href={item.href ? item.href : ""}
                  target={item.target}
                > */}
                {item.label}
                {/* </ProgressBarLink> */}
              </DropdownItem>
            ))}
          </DropdownSection>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownWithSections;
