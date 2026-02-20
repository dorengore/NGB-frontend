"use client";

import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { useDisclosure } from "@heroui/modal";
import { CameraIcon } from "lucide-react";
import { ChangeEvent, useState, useEffect } from "react";
import { Image } from "@heroui/image";
import { useParams } from "next/navigation";

import ImageUploadModal from "../modals/image-upload-modal";

import { useAppSelector } from "@/lib/redux/hooks";

interface BannerUploadProps {
  pathname: string;
  croppedImage: string | undefined;
  handleUpload: (croppedImage: any) => void;
  isDefaultBanner?: boolean;
  isLoading?: boolean;
  adminId?: number | null;
}

const BannerUpload = ({
  pathname,
  croppedImage,
  handleUpload,
  isDefaultBanner,
  isLoading,
  adminId,
}: BannerUploadProps) => {
  const { userId } = useAppSelector((state) => state.auth);
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const [isClient, setIsClient] = useState(false);

  const {
    isOpen: isOpenBannerModal,
    onOpen: onOpenBannerModal,
    onOpenChange: onOpenChangeBannerModal,
  } = useDisclosure();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target?.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setSelectedImage(reader.result as string);
        onOpenBannerModal();
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    document.getElementById("bannerInput")?.click();
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
        <div className="absolute z-[20] right-4 top-4">
          <Button startContent={<CameraIcon />} onPress={handleButtonClick}>
            Upload Banner
          </Button>
          <Input
            accept="image/*"
            className="hidden"
            id="bannerInput"
            type="file"
            onChange={handleImageUpload}
          />
        </div>
      );
    }

    if (pathname.startsWith("/teams") && userId === adminId) {
      return (
        <div className="absolute z-[20] right-4 top-4">
          <Button startContent={<CameraIcon />} onPress={handleButtonClick}>
            Upload Banner
          </Button>
          <Input
            accept="image/*"
            className="hidden"
            id="bannerInput"
            type="file"
            onChange={handleImageUpload}
          />
        </div>
      );
    }

    if (adminId === userId) {
      return (
        <div className="absolute z-[20] right-4 top-4">
          <Button startContent={<CameraIcon />} onPress={handleButtonClick}>
            Upload Banner
          </Button>
          <Input
            accept="image/*"
            className="hidden"
            id="bannerInput"
            type="file"
            onChange={handleImageUpload}
          />
        </div>
      );
    }

    return null;
  };

  return (
    <div className="relative pt-3 rounded-lg h-[200px]">
      {croppedImage && (
        <div className="w-full px-3 relative">
          <Image
            alt="space banner"
            className={`${croppedImage === "undefined" ? "w-full" : " w-[100vw]"}  h-[300px]`}
            src={croppedImage}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      )}
      {renderUploadButton()}
      <ImageUploadModal
        aspect={4 / 1}
        isLoading={isLoading}
        isOpen={isOpenBannerModal}
        selectedImage={selectedImage}
        onOpenChange={onOpenChangeBannerModal}
        onUpload={handleUpload}
      />
    </div>
  );
};

export default BannerUpload;
