import { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@heroui/button";

import { fetchSpaceByUrl } from "../(space)/layout";

import CurrentSpaceProvider from "@/context/current-space-provider";
import UnauthorizedSpaceUser from "@/components/unauthorized-space-user";

export const revalidate = 0;

const SpaceSettingsLayout = async ({
  children,
  params,
}: {
  children: ReactNode;
  params: any;
}) => {
  const currentSpace = await fetchSpaceByUrl(params.spaceId);

  if (!currentSpace?.space) {
    return (
      <div className="flex flex-col gap-3 mt-20 items-center justify-center">
        <h2 className="text-2xl">Failed to fetch space.</h2>
        <Button as={Link} href="/">
          Home
        </Button>
      </div>
    );
  }

  return (
    <CurrentSpaceProvider space={currentSpace?.space}>
      <UnauthorizedSpaceUser
        spaceAdmin={currentSpace.space.adminId}
        spaceId={params.spaceId}
      >
        {children}
      </UnauthorizedSpaceUser>
    </CurrentSpaceProvider>
  );
};

export default SpaceSettingsLayout;
