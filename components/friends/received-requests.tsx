import { Image } from "@heroui/image";

import FriendsButtons, {
  FriendRequestStatus,
} from "../buttons/friends-buttons";
import ProgressBarLink from "../progress/progress-link";

import { FriendRequests } from "@/types/interface";

const ReceivedRequests = ({
  requests,
}: {
  requests: FriendRequests[] | undefined;
}) => {
  if (!requests) {
    return null;
  }

  return (
    <div>
      <h2 className="text-3xl font-bold">Received Requests</h2>
      <div className="grid grid-cols-5 mt-4">
        {requests
          .filter((req) => req.FriendRequest.status === "PENDING")
          ?.map((req) => (
            <div key={req.id} className="flex flex-col items-center gap-3">
              <Image
                height={120}
                radius="full"
                src={`${req.imageData}`}
                width={120}
              />
              <ProgressBarLink href={`/users/${req.id}`}>
                <h2>{req.username}</h2>
              </ProgressBarLink>
              <FriendsButtons
                friendReqStatus={
                  req?.FriendRequest.status as FriendRequestStatus
                }
                isReceivedRequest={true}
                user={{
                  id: req.id,
                  email: req.email,
                  bannerData: null,
                  imageData: null,
                  username: req.username,
                }}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ReceivedRequests;
