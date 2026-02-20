import { Image } from "@heroui/image";
import { cookies } from "next/headers";
import { Button } from "@heroui/button";
import Link from "next/link";

import { apiRequest } from "@/lib/utils/api-request";

interface Post {
  content: string;
  imageData: string;
}

const fetchPostById = async (
  postId: number,
  token: string
): Promise<Post | null> => {
  try {
    const response = await apiRequest(`/posts/${postId}`, "GET", token);

    return response.post || null;
  } catch (error) {
    console.error("Error fetching post:", error);

    return null;
  }
};

const PostPage = async ({ params }: { params: { id: string } }) => {
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

  const post = await fetchPostById(Number(params.id), token);

  if (!post) {
    throw new Error("No Post Found");
  }

  return (
    <div>
      <h2>{post.content}</h2>
      <Image alt="Post image" src={post.imageData} />
    </div>
  );
};

export default PostPage;
