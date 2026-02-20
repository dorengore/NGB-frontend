import { Button } from "@heroui/button";

import SpaceBannerUpload from "./spaces/space-banner-upload";
import SpaceProfileUpload from "./spaces/space-profile-upload";

const TournamentHeader = ({ space }: any) => {
  return (
    <section className="w-full">
      <SpaceBannerUpload space={space} />
      <div className="flex pl-2 relative px-3 z-20 pt-10 pb-5 gap-11 flex-col items-start justify-start ">
        <SpaceProfileUpload space={space} />
        <div className="flex flex-col md:flex-row items-center mt-6 justify-between w-full px-3 gap-4">
          <h2 className="md:text-4xl text-7xl font-bold capitalize">
            Tournament Name
          </h2>

          <Button isDisabled color="primary" radius="full">
            Join Tournament
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TournamentHeader;
