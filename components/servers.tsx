import { Avatar } from "@heroui/avatar";
import { PlusIcon } from "lucide-react";
import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import { Link } from "@heroui/link";

import JoinedSpaces from "./joined-spaces";

import { servers } from "@/data/dummy-servers";

const Servers = ({ isMobile }: { isMobile?: boolean }) => {
  const renderServers = servers.slice(0, 1).map((server) => (
    <Tooltip key={server.id} content={server.name} placement="right">
      <Link href={server.href}>
        <Avatar className="cursor-pointer" radius="sm" src={server.image} />
      </Link>
    </Tooltip>
  ));

  return (
    <section
      className={`p-3 relative shadow-small bg-[#16181b]  ${isMobile ? "block" : "hidden"} md:block w-fit `}
    >
      <aside className={`sticky mb-4 ${isMobile ? "-top-4" : "top-20"}`}>
        <div className="flex  flex-col gap-2">
          {renderServers}

          <Tooltip content={<h2>Add Account</h2>} placement="right">
            <Button isIconOnly radius="sm">
              <PlusIcon />
            </Button>
          </Tooltip>
        </div>
      </aside>
      <JoinedSpaces />
    </section>
  );
};

export default Servers;
