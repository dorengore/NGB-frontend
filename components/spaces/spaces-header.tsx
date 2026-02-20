import { Avatar } from "@heroui/avatar";
import { Tooltip } from "@heroui/tooltip";

import JoinLeaveSpaceButton from "../buttons/join-leave-space";

import AdminTooltip from "./cards/admin-tooltip";
import SpaceBannerUpload from "./space-banner-upload";
import SpaceProfileUpload from "./space-profile-upload";

const SpacesHeader = ({ space }: any) => {
  return (
    <section className="w-full">
      <SpaceBannerUpload space={space} />
      <div className="flex pl-2 relative px-3 z-20 pt-10 pb-5 gap-11 flex-col items-start justify-start ">
        <SpaceProfileUpload space={space} />
        <div className="flex flex-col md:flex-row  items-center mt-12 justify-between w-full px-3 gap-4">
          <h2 className="md:text-4xl text-7xl font-bold capitalize">
            {space?.name}
          </h2>
          <div className="flex items-center justify-between w-full md:w-fit mt-8 lg:mt-0 lg:justify-center gap-4">
            <div className="flex gap-3 items-center">
              <Tooltip
                content={<AdminTooltip spaceAdmin={space.admin} />}
                placement="top"
              >
                <Avatar size="sm" />
              </Tooltip>
              Admin
            </div>
            <JoinLeaveSpaceButton spaceId={space.id} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpacesHeader;
