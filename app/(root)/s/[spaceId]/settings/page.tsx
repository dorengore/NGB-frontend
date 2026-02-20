import { Button } from "@heroui/button";

import ProgressBarLink from "@/components/progress/progress-link";
import SpaceLinkCard from "@/components/spaces/cards/space-link-card";
import SpaceSettingsTab from "@/components/tabs/space-settings-tabs";
import UserFunds from "@/components/user-profile/user-funds";

const SpaceSettingsMobile = ({ params }: { params: { spaceId: string } }) => {
  const { spaceId } = params;

  return (
    <div>
      <>
        <div className="lg:flex  items-center gap-5 justify-center mt-10 flex-col hidden">
          <h2 className="text-3xl">Not Available for this screen size</h2>
          <Button as={ProgressBarLink} color="primary" href="/" radius="full">
            Return Home
          </Button>
        </div>
        <section className="w-full  mx-auto lg:hidden flex gap-3">
          <div className="flex  flex-col w-full lg:w-fit px-5 gap-4">
            <SpaceLinkCard />
            <UserFunds />
            <SpaceSettingsTab spaceUrl={spaceId} />
          </div>
        </section>
      </>
    </div>
  );
};

export default SpaceSettingsMobile;
