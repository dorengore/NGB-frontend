import { cookies } from "next/headers";

import { apiRequest } from "@/lib/utils/api-request";
import { FriendRequestInterface, UserFriends } from "@/types/interface";
import Friends from "@/components/friends/friends";

const fetchUserFriends = async (token: string): Promise<UserFriends | null> => {
  const response = await apiRequest("/friends", "GET", token);

  return response;
};

const fetchUserFriendRequests = async (
  token: string
): Promise<FriendRequestInterface | null> => {
  const response = await apiRequest("/friends/requests", "GET", token);

  return response;
};

export const revalidate = 0;

const UserFriendsPage = async () => {
  const cookiesStore = cookies();
  const token = cookiesStore.get("token")?.value;

  if (!token) {
    throw Error("No user logged in.");
  }

  const friendRequestData = fetchUserFriendRequests(token);
  const userFriendsData = fetchUserFriends(token);

  const [friendsRequest, userFriends] = await Promise.all([
    friendRequestData,
    userFriendsData,
  ]);

  return (
    <div>
      <Friends friendsRequest={friendsRequest} userFriends={userFriends} />
    </div>
  );
};

export default UserFriendsPage;
