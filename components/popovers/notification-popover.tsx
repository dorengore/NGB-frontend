import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { BellIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Settings from "../dropdowns/settings";
import NoNotifications from "../no-notifications";
import LinkButton from "../buttons/link-button";

const NotificationPopover = () => {
  const router = useRouter();
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
          <BellIcon size={18} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 max-w-lg w-[400px]">
        <Card fullWidth shadow="none">
          <CardHeader className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Notifications</h2>
            <Settings />
          </CardHeader>
          <Divider />
          <CardBody className="items-center justify-center gap-3 py-10">
            <NoNotifications
              content="Your recent notifications will show up here."
              heading="No Notifications"
              icon={BellIcon}
            />
          </CardBody>
          <Divider />
          <CardFooter className="p-0">
            <LinkButton
              fullWidth
              href="/user/notifications"
              radius="none"
              variant="flat"
              onClick={() => {
                setIsOpen((open) => !open);
              }}
            >
              View All
            </LinkButton>
          </CardFooter>
        </Card>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationPopover;
