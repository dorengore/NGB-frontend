"use client";

import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { useDisclosure } from "@heroui/modal";
import { CameraIcon, RocketIcon } from "lucide-react";
import { ChangeEvent, useState, useEffect } from "react";
import { Image } from "@heroui/image";
import { Card, CardBody } from "@heroui/card";
import { useParams } from "next/navigation";

import ImageUploadModal from "../modals/image-upload-modal";

import { useAppSelector } from "@/lib/redux/hooks";

interface ProfileUploadProps {
  pathname: string;
  croppedImage: string | null;
  handleUpload: (croppedImage: any) => void;
  isDefaultBanner: boolean;
  isLoading?: boolean;
  adminId?: number | null;
}

const ProfileUpload = ({
  pathname,
  croppedImage,
  handleUpload,
  isDefaultBanner,
  isLoading,
  adminId,
}: ProfileUploadProps) => {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const { id } = useParams();
  const [isClient, setIsClient] = useState(false);
  const { userId } = useAppSelector((state) => state.auth);

  const {
    isOpen: isOpenProfileModal,
    onOpen: onOpenProfileModal,
    onOpenChange: onOpenChangeProfileModal,
  } = useDisclosure();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target?.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        onOpenProfileModal();
      };

      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    document.getElementById("profile-img-input")?.click();
  };

  const renderUploadButton = () => {
    if (!isClient) return null;
    // if (!isDefaultBanner) return null;
    if (
      pathname.startsWith("/users") &&
      userId &&
      Number(userId) === Number(id)
    ) {
      return (
        <Button
          isIconOnly
          className="absolute z-20 w-[50px] flex items-center justify-center h-[50px] -bottom-6 -right-6 p-4 rounded-full bg-black"
          onPress={handleButtonClick}
        >
          <CameraIcon size={90} />
        </Button>
      );
    }

    if (pathname.startsWith("/teams") && adminId === userId) {
      return (
        <Button
          isIconOnly
          className="absolute z-20 w-[50px] flex items-center justify-center h-[50px] -bottom-6 -right-6 p-4 rounded-full bg-black"
          onPress={handleButtonClick}
        >
          <CameraIcon size={90} />
        </Button>
      );
    }

    if (adminId === userId) {
      return (
        <Button
          isIconOnly
          className="absolute z-20 w-[50px] flex items-center justify-center h-[50px] -bottom-6 -right-6 p-4 rounded-full bg-black"
          onPress={handleButtonClick}
        >
          <CameraIcon size={90} />
        </Button>
      );
    }

    return null;
  };

  return (
    <>
      <div className="relative p-14 flex items-center justify-center ">
        {croppedImage ? (
          <div className="absolute min-w-[130px] w-[130px] min-h-[130px] h-[130px] flex items-center justify-center z-10">
            <Card shadow="sm">
              <CardBody className="p-3">
                <Image
                  alt="profile image"
                  height={100}
                  src={croppedImage}
                  style={{
                    objectFit: "cover",
                  }}
                  width={100}
                />
              </CardBody>
            </Card>
          </div>
        ) : (
          <div>
            <RocketIcon size={70} />
          </div>
        )}
        {renderUploadButton()}
        <Input
          accept="image/*"
          className="hidden"
          id="profile-img-input"
          type="file"
          onChange={handleImageUpload}
        />
      </div>

      <ImageUploadModal
        aspect={1}
        isLoading={isLoading}
        isOpen={isOpenProfileModal}
        selectedImage={selectedImage}
        onOpenChange={onOpenChangeProfileModal}
        onUpload={handleUpload}
      />
    </>
  );
};

export default ProfileUpload;
