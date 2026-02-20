"use client";

import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { ImagePlusIcon, RocketIcon } from "lucide-react";
import { Textarea } from "@heroui/input";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { Avatar } from "@heroui/avatar";

import FeedList from "../feed-list";

import ImageUploader from "@/components/image-uploader";
import { FeedSchema } from "@/lib/validations";
import {
  useCreatePostMutation,
  useGetPostsQuery,
} from "@/lib/redux/api/feed-api";
import { FileWithPreview } from "@/types/interface";
import { useAppSelector } from "@/lib/redux/hooks";

export type FeedFormData = z.infer<typeof FeedSchema>;

const FeedCard = () => {
  const [addPostImage, setAddPostImage] = useState(false);
  const toggleAddPostImage = () => setAddPostImage((prevState) => !prevState);
  const { data, refetch, isLoading, isError } = useGetPostsQuery();
  const [createPost, { isLoading: isCreating }] = useCreatePostMutation();
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const { id, imageData } = useAppSelector((state) => state.currentSpace);
  const posts = data?.posts ?? [];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FeedFormData>({
    resolver: zodResolver(FeedSchema),
    defaultValues: {
      content: "",
    },
  });

  const onSubmit = async (values: FeedFormData) => {
    try {
      await createPost({
        content: values.content,
        imageData: files[0]?.base64,
        authorId: "1",
        spaceId: `${id}`,
      }).unwrap();

      reset();
      setFiles([]);
      setAddPostImage(false);
      await refetch();
      toast.success("Post Created Successfully.", { position: "top-right" });
    } catch (error) {
      console.log(error);
      toast.error("Error Creating Post.", { position: "top-right" });
    }
  };

  return (
    <>
      <Card className="mb-4">
        <CardBody className=" gap-4">
          <div className="flex gap-4">
            <Button isIconOnly radius="full">
              {imageData ? (
                <Avatar src={`${imageData}`} />
              ) : (
                <div className="relative  p-5 bg-black/50 w-[30px] h-[30px] flex items-center justify-center rounded-full">
                  <div>
                    <RocketIcon size={20} />
                  </div>
                </div>
              )}
            </Button>
            <form className="w-full" onSubmit={(e) => e.preventDefault()}>
              <Textarea
                fullWidth
                size="lg"
                {...register("content")}
                errorMessage={errors?.content?.message}
                isInvalid={!!errors?.content?.message}
                placeholder="Write a post ..."
              />
            </form>
          </div>

          {addPostImage && <ImageUploader files={files} setFiles={setFiles} />}
        </CardBody>
        <CardFooter className="flex items-center justify-end gap-3">
          <Button isIconOnly radius="full" onPress={toggleAddPostImage}>
            <ImagePlusIcon />
          </Button>
          <Button
            color="primary"
            isLoading={isCreating}
            radius="full"
            onClick={handleSubmit(onSubmit)}
          >
            Post
          </Button>
        </CardFooter>
      </Card>
      <FeedList
        feeds={posts}
        imageData={imageData}
        isError={isError}
        isLoading={isLoading}
        refetch={refetch}
      />
    </>
  );
};

export default FeedCard;
