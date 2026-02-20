import { Button } from "@heroui/button";

import NavigateBackButton from "@/components/buttons/navigate-back-button";
import ProgressBarLink from "@/components/progress/progress-link";
import SettingsTabs from "@/components/tabs/user-settings-tabs";
import ProfileLinkCard from "@/components/user-profile/profile-link-card";
import UserFunds from "@/components/user-profile/user-funds";

const UserSettingsPage = () => {
  return (
    <>
      <div className="lg:flex items-center gap-5 justify-center mt-10 flex-col hidden">
        <h2 className="text-3xl">Not Available for this screen size</h2>
        <Button as={ProgressBarLink} color="primary" href="/" radius="full">
          Return Home
        </Button>
      </div>
      <section className="w-full  mx-auto lg:hidden flex gap-3">
        <div className="flex  flex-col w-full lg:w-fit px-5 gap-4">
          <NavigateBackButton />
          <ProfileLinkCard />
          <UserFunds />
          <SettingsTabs />
        </div>
      </section>
    </>
  );
};

export default UserSettingsPage;
