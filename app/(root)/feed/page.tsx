import { cookies } from "next/headers";
import { Button } from "@heroui/button";
import Link from "next/link";

import { apiRequest } from "@/lib/utils/api-request";
import FeedCard from "@/components/spaces/cards/feed-card";
import SuggestedSpaces from "@/components/cards/spaces/suggested-spaces";
import NavigateBackButton from "@/components/buttons/navigate-back-button";

interface Post {
  content: string;
  imageData: string;
}

export const revalidate = 180;

async function fetchUserJoinedPosts(token: string): Promise<Post[]> {
  try {
    const response = await apiRequest(
      `/posts/user-joined-spaces-posts`,
      "GET",
      token
    );

    return response.posts || [];
  } catch (error) {
    console.error("Error fetching posts:", error);

    return [];
  }
}

export default async function FeedPage() {
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

  const posts = await fetchUserJoinedPosts(token);

  return (
    <div className="p-5 pb-28">
      <div className="flex items-center gap-4  mb-7">
        <NavigateBackButton />
        <h2 className="text-2xl lg:text-4xl font-bold">Feed</h2>
      </div>
      <div className="flex gap-6">
        <div className="lg:w-[60%]">
          {posts.length > 0 ? <FeedCard /> : <p>No posts found.</p>}
        </div>
        <div className="w-full hidden lg:block max-w-[40%]">
          <SuggestedSpaces />
        </div>
      </div>
    </div>
  );
}
