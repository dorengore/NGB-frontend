import type { ReactNode } from "react";

import SpacesTabs from "@/components/tabs/spaces-tabs";

const SpacesLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full gap-4">
      <div className="relative">
        <div className="sticky hidden lg:block h-screen top-0">
          <SpacesTabs />
        </div>
      </div>
      <div className="flex-grow  pr-3">{children}</div>
    </div>
  );
};

export default SpacesLayout;
