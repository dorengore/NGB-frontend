import UserBannerUpload from "./user-banner-upload";
import UserProfileImgUpload from "./user-profile-img-upload";
import UserStatsCard from "./user-stats-card";

import { User } from "@/lib/redux/api";

interface ProfileHeaderProps {
  user: User;
}

const ProfileHeader = ({ user }: ProfileHeaderProps) => {
  return (
    <section className="w-full">
      <UserBannerUpload user={user} />
      <div className="flex flex-col relative z-20 pt-10 pb-5 gap-5 items-center justify-start ">
        <UserProfileImgUpload user={user} />
        <div className="flex items-center flex-col gap-4">
          <span>User</span>
          <h2 className="text-5xl font-bold">{user.username}</h2>
        </div>
      </div>
      <div className="flex gap-3 px-3">
        <UserStatsCard />
        <UserStatsCard />
        <UserStatsCard />
      </div>
    </section>
  );
};

export default ProfileHeader;
