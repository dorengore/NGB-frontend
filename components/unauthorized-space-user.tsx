"use client";
import { ReactNode, useEffect, useState } from "react";

import SpaceLinkCard from "./spaces/cards/space-link-card";
import UserFunds from "./user-profile/user-funds";
import SpaceSettingsTab from "./tabs/space-settings-tabs";
import LoadingSpinner from "./loading-spinner";

import { useAppSelector } from "@/lib/redux/hooks";

const UnauthorizedSpaceUser = ({
  spaceAdmin,
  children,
  spaceId,
}: {
  spaceAdmin: number | null;
  children: ReactNode;
  spaceId: string;
}) => {
  const [unAuth, setUnAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const { adminId } = useAppSelector((state) => state.currentSpace);
  const { userId } = useAppSelector((state) => state.auth);

  useEffect(() => {
    setUnAuth(Number(userId) !== Number(adminId));
    setLoading(false);
  }, [spaceId, adminId, userId]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (unAuth && !loading) {
    return <h2>Not Allowed To View this page</h2>;
  }

  return (
    // <div>
    //   <div className="w-full flex gap-4">
    //     <div className="flex flex-col gap-3 border-r pr-5">
    //       <SpaceLinkCard />
    //       <UserFunds />
    //       <SpaceSettingsTab spaceUrl={spaceId} />
    //     </div>
    //     <div className="flex-grow">{children}</div>
    //   </div>
    // </div>
    <section className="w-full flex gap-3">
      <div className="lg:flex border-r pb-10 hidden flex-col w-full lg:w-fit px-5 gap-4">
        <SpaceLinkCard />
        <UserFunds />
        <SpaceSettingsTab spaceUrl={spaceId} />
      </div>
      <div className="flex-grow">{children}</div>
    </section>
  );
};

export default UnauthorizedSpaceUser;
