import { ReactNode } from "react";

import SettingsTabs from "@/components/tabs/user-settings-tabs";
import UserFunds from "@/components/user-profile/user-funds";
import ProfileLinkCard from "@/components/user-profile/profile-link-card";
import NavigateBackButton from "@/components/buttons/navigate-back-button";

const UserSettingsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="w-full flex gap-3">
      <div className="lg:flex border-r hidden flex-col w-full lg:w-fit px-5 gap-4">
        <NavigateBackButton />
        <ProfileLinkCard />
        <UserFunds />
        <SettingsTabs />
      </div>
      <div className="flex-grow">{children}</div>
    </section>
  );
};

export default UserSettingsLayout;
