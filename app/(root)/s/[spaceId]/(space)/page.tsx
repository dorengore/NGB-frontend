import { Button } from "@heroui/button";
import Link from "next/link";

import { fetchSpaceByUrl } from "./layout";

import SpaceAbout from "@/components/spaces/cards/space-about";
import SpaceRecommendTournament from "@/components/spaces/cards/space-recommend-tournament";

interface SpacePageParams {
  params: {
    spaceId: string;
  };
}

const SpacePage = async ({ params }: SpacePageParams) => {
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
    <>
      {/* <SpacesHeader space={currentSpace?.space} /> */}
      {/* <SpaceTabs spaceName={params.spaceId} /> */}
      <div className="px-3">
        <div>
          <SpaceRecommendTournament spaceName={params.spaceId} />
        </div>
        <div className="mt-8">
          <h2 className="text-3xl mb-4">About</h2>
          <SpaceAbout space={currentSpace.space} />
        </div>
      </div>
    </>
  );
};

export default SpacePage;
