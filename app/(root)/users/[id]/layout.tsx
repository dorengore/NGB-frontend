import type { ReactNode } from "react";
import { cookies } from "next/headers";
import { Button } from "@heroui/button";
import Link from "next/link";

import type { User } from "@/lib/redux/api";
import ProfileTabs from "@/components/tabs/profile-tabs";
import ProfileHeader from "@/components/user-profile/profile-header";

interface UserProfileLayoutProps {
  children: ReactNode;
  params: {
    id: string;
  };
}

interface UserResponse {
  user: User;
}

export const fetchUser = async (
  userId: string,
  token: string
): Promise<UserResponse | null> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/user/${userId}`,
    {
      next: {
        revalidate: 0,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    if (response.status === 400) {
      return null;
    }
    throw new Error("Failed to get user data.");
  }

  return response.json();
};

const UserProfileLayout = async ({
  children,
  params,
}: UserProfileLayoutProps) => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return (
      <div className="flex flex-col gap-3 mt-20 items-center justify-center">
        <h2 className="text-2xl">Please Log In</h2>
        <Button as={Link} href="/login">
          Login
        </Button>
      </div>
    );
  }

  let userData: UserResponse | null = null;
  try {
    userData = await fetchUser(params.id, token);
  } catch (error) {
    return (
      <div className="flex flex-col gap-3 mt-20 items-center justify-center">
        <h2 className="text-2xl text-red-500">Error loading user profile.</h2>
        <p>Please try again later.</p>
        <Button as={Link} href="/">
          Home
        </Button>
      </div>
    );
  }

  const user = userData?.user;

  if (!user) {
    return (
      <div className="flex flex-col gap-3 mt-20 items-center justify-center">
        <h2 className="text-2xl">No user found</h2>
        <Button as={Link} href="/">
          Home
        </Button>
      </div>
    );
  }

  return (
    <section className="w-full pb-20">
      <ProfileHeader user={user} />
      <ProfileTabs userId={params.id} />
      <div className="px-3">{children}</div>
    </section>
  );
};

export default UserProfileLayout;
