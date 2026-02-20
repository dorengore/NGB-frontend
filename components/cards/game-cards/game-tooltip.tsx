import { Button } from "@heroui/button";

import JoinLeaveSpaceButton from "@/components/buttons/join-leave-space";

const GameTooltip = ({ spaceId }: { spaceId: number | null }) => {
  return (
    <div className="overflow-y-auto py-3">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
        alias modi perferendis nemo tempore corrupti debitis velit maxime
        numquam, commodi culpa similique incidunt illo nihil, hic iure quis
        sapiente sit!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
        alias modi perferendis nemo tempore corrupti debitis velit maxime
        numquam, commodi culpa similique incidunt illo nihil, hic iure quis
        sapiente sit!
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
        alias modi perferendis nemo tempore corrupti debitis velit maxime
        numquam, commodi culpa similique incidunt illo nihil, hic iure quis
        sapiente sit!
      </p>
      <div className="flex gap-2 mt-8 items-center justify-end">
        <JoinLeaveSpaceButton size="sm" spaceId={`${spaceId}`} />
        <Button radius="full" size="sm" variant="ghost">
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default GameTooltip;
