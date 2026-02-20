"use client";
import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import {
  MoreHorizontal,
  PenBoxIcon,
  SquareArrowOutUpRight,
  Trash2Icon,
} from "lucide-react";

const FeedOptions = ({
  onDelete,
  onEdit,
  onNavigate,
}: {
  onDelete: () => void;
  onEdit: () => void;
  onNavigate: () => void;
}) => {
  return (
    <Dropdown placement="left-start">
      <DropdownTrigger>
        <Button isIconOnly radius="full" size="sm" variant="flat">
          <MoreHorizontal size={18} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dropdown menu with icons" variant="flat">
        <DropdownItem
          key="View"
          startContent={<SquareArrowOutUpRight />}
          onPress={onNavigate}
        >
          View
        </DropdownItem>
        <DropdownItem key="edit" startContent={<PenBoxIcon />} onPress={onEdit}>
          Edit
        </DropdownItem>

        <DropdownItem
          key="delete"
          className="text-danger"
          color="danger"
          startContent={<Trash2Icon />}
          onClick={onDelete}
        >
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default FeedOptions;
