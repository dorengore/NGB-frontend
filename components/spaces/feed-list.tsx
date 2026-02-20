import toast from "react-hot-toast";
import { Button } from "@heroui/button";
import { useDisclosure } from "@heroui/modal";
import { useState } from "react";

import LoadingSpinner from "../loading-spinner";
import EditFeedModal from "../modals/edit-feed-modal";

import FeedItem from "./cards/feed-item";

import {
  Post,
  useDeletePostMutation,
  useEditPostMutation,
  useLikePostMutation,
} from "@/lib/redux/api/feed-api";

interface FeedsProps {
  feeds: Post[];
  isLoading: boolean;
  isError: boolean;
  refetch: any;
  imageData: string | null;
}
const FeedList = ({
  imageData,
  isLoading,
  isError,
  feeds,
  refetch,
}: FeedsProps) => {
  const [deletePost, { isLoading: deleting }] = useDeletePostMutation();
  const [likePost, { isLoading: liking }] = useLikePostMutation();
  const [editPost, { isLoading: editing }] = useEditPostMutation();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [feedItem, setFeedItem] = useState({
    content: "",
    imageData: "",
    feedId: 0,
  });

  const deletePostHandler = async (feedId: number) => {
    try {
      await deletePost(feedId).unwrap();
      toast.success("Post Deleted Successfully.", { position: "top-right" });
      await refetch();
    } catch (error) {
      toast.error("Error Deleting Post.", { position: "top-right" });
    }
  };

  const likePostHandler = async (feedId: number) => {
    try {
      await likePost(feedId).unwrap();
      toast.success("Post Liked Successfully.", { position: "top-right" });
      await refetch();
    } catch (error) {
      return null;
    }
  };

  const editPostHandler = async (feedId: number, content: string) => {
    try {
      await editPost({ postId: feedId, content }).unwrap();
      toast.success("Post Edited Successfully.", { position: "top-right" });
      await refetch();
      onOpenChange();
    } catch (error) {
      toast.error("Error Editing Post.", { position: "top-right" });
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return (
      <div className="flex flex-col gap-3 items-center justify-center">
        <h2>Failed to get feeds. try again later.</h2>
        <Button onPress={refetch}>Refresh</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {feeds
        .filter((feed) => feed.status !== "DEACTIVATED")
        .map((feed) => (
          <FeedItem
            key={feed.id}
            authorId={feed.authorId}
            content={feed.content}
            deletePostHandler={deletePostHandler}
            editPostHandler={(
              feedId: number,
              content: string,
              imageData: string
            ) => {
              setFeedItem({
                feedId,
                content,
                imageData,
              });
              onOpen();
            }}
            id={feed.id}
            imageData={feed.imageData}
            isLoading={deleting || isLoading}
            likePostHandler={likePostHandler}
            likesCount={feed.likesCount}
            spaceId={feed.spaceId}
            spaceImageData={imageData}
            status={feed.status}
            username={feed.user.username}
          />
        ))}

      <EditFeedModal
        content={feedItem.content}
        imageData={feedItem.imageData}
        isLoading={editing}
        isOpen={isOpen}
        onConfirm={async (content: string) =>
          await editPostHandler(feedItem.feedId, content)
        }
        onOpenChange={onOpenChange}
      />
    </div>
  );
};

export default FeedList;
