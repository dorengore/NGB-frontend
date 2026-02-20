import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import { MessagesSquareIcon } from "lucide-react";
import React, { useState } from "react";

import Settings from "../dropdowns/settings";
import NoNotifications from "../no-notifications";

const ChatPopover = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover
      showArrow
      isOpen={isOpen}
      placement="left-start"
      onOpenChange={(open) => setIsOpen(open)}
    >
      <PopoverTrigger>
        <Button isIconOnly radius="full" size="sm">
          <MessagesSquareIcon size={18} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 max-w-lg w-[400px]">
        <Card fullWidth shadow="none">
          <CardHeader className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Chats</h2>
            <Settings />
          </CardHeader>
          <Divider />
          <CardBody className="items-center justify-center gap-3 py-10">
            <NoNotifications
              content="Your recent chats will show up here."
              heading="No Chats"
              icon={MessagesSquareIcon}
            />
          </CardBody>
        </Card>
      </PopoverContent>
    </Popover>
  );
};

export default ChatPopover;
