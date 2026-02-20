import { Image } from "@heroui/image";

import FriendsButtons, {
  FriendRequestStatus,
} from "../buttons/friends-buttons";
import ProgressBarLink from "../progress/progress-link";

import { Friend } from "@/types/interface";

const UserFriends = ({ friends }: { friends: Friend[] | undefined }) => {
  if (!friends) {
    return null;
  }

  return (
    <div>
      <h2 className="text-3xl font-bold">My Friends</h2>
      <div className="grid grid-cols-5 mt-4">
        {friends.map((friend) => (
          <div key={friend.id} className="flex flex-col items-center gap-3">
            <Image
              height={120}
              radius="full"
              src={`${friend.imageData}`}
              width={120}
            />
            <ProgressBarLink href={`/users/${friend.id}`}>
              <h2>{friend.username}</h2>
            </ProgressBarLink>
            <FriendsButtons
              friendReqStatus={"ACCEPTED" as FriendRequestStatus}
              user={{
                id: friend.id,
                email: friend.email,
                bannerData: friend.bannerData,
                imageData: friend.imageData,
                username: friend.username,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserFriends;
