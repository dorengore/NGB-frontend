import { ReactNode } from "react";
import { Button } from "@heroui/button";
import Link from "next/link";

import SpacesHeader from "@/components/spaces/spaces-header";
import SpaceTabs from "@/components/tabs/space-tabs";
import { SpaceInterface } from "@/types/interface";
import CurrentSpaceProvider from "@/context/current-space-provider";

export const fetchSpaceByUrl = async (
  spaceUrl: string
): Promise<SpaceInterface | null> => {
  const params = new URLSearchParams({
    url: spaceUrl,
  });
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/spaces/url?${params}`,
    { next: { revalidate: 0 } }
    // { cache: "no-store" },
  );

  if (!response.ok) {
    if (response.status === 400) {
      return null;
    }
    throw new Error("Failed to fetch space.");
  }

  return response.json();
};

const Layout = async ({
  children,
  params,
}: {
  children: ReactNode;
  params: { spaceId: string };
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
    <CurrentSpaceProvider space={currentSpace.space}>
      <div className="flex flex-col pb-20">
        <SpacesHeader space={currentSpace?.space} />
        <SpaceTabs
          adminId={currentSpace.space.adminId}
          spaceName={params.spaceId}
        />
        {children}
      </div>
    </CurrentSpaceProvider>
  );
};

export default Layout;
