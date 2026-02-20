import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { HeartIcon, MessageCircle, RocketIcon } from "lucide-react";
import { useState } from "react";
import { Image } from "@heroui/image";
import { Avatar } from "@heroui/avatar";
import { Tooltip } from "@heroui/tooltip";
import { useRouter } from "next/navigation";
import { PhotoProvider, PhotoView } from "react-photo-view";

import SpaceTooltip from "../space-tooltip";

import { FeedItemProps } from "@/types/interface";
import { useAppSelector } from "@/lib/redux/hooks";
import FeedOptions from "@/components/dropdowns/feed-options";
import "react-photo-view/dist/react-photo-view.css";

const FeedItem = ({
  authorId,
  content,
  id,
  imageData,
  likesCount,
  spaceId,
  status,
  username,
  spaceImageData,
  deletePostHandler,
  likePostHandler,
  editPostHandler,
}: FeedItemProps) => {
  const [liked, setLiked] = useState(false);
  const space = useAppSelector((state) => state.currentSpace);
  const router = useRouter();

  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Tooltip
            className="w-[300px]"
            content={
              <SpaceTooltip
                // @ts-ignore
                space={space}
              />
            }
          >
            {spaceImageData ? (
              <Avatar src={`${spaceImageData}`} />
            ) : (
              <div className="relative  p-5 bg-black/50 w-[30px] h-[30px] flex items-center justify-center rounded-full">
                <div>
                  <RocketIcon size={20} />
                </div>
              </div>
            )}
          </Tooltip>
          <h2>Posted by {username}</h2>
        </div>
        <FeedOptions
          onDelete={() => deletePostHandler(id)}
          onEdit={() => editPostHandler(id, content, imageData)}
          onNavigate={() => router.push(`/posts/${id}`)}
        />
      </CardHeader>
      <CardBody className="gap-2">
        <div>
          {imageData && (
            <PhotoProvider maskOpacity={0.4}>
              <PhotoView src={imageData}>
                <Image alt="feed post" src={imageData} />
              </PhotoView>
            </PhotoProvider>
          )}
        </div>
        <div>
          <p> {content}</p>
        </div>
      </CardBody>
      <CardFooter className="flex items-center justify-start gap-3">
        <Button
          isIconOnly
          radius="full"
          size="sm"
          variant="light"
          onPress={() => {
            likePostHandler(id);
            setLiked((v) => !v);
          }}
        >
          <HeartIcon
            className={liked ? "[&>path]:stroke-transparent" : ""}
            fill={liked ? "red" : "none"}
            size={17}
          />
        </Button>
        <Button isIconOnly radius="full" size="sm" variant="light">
          <MessageCircle size={17} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FeedItem;
