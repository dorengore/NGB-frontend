"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import BannerUpload from "../buttons/banner-upload";

import { User } from "@/lib/redux/api";
import { apiRequest } from "@/lib/utils/api-request";
import { useAppSelector } from "@/lib/redux/hooks";

interface UserBannerUploadProps {
  user: User;
}

const UserBannerUpload = ({ user }: UserBannerUploadProps) => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [croppedImage, setCroppedImage] = useState<string | undefined>(
    user.bannerData ? user.bannerData : "/assets/images/default-bg.jpg"
  );
  const { token } = useAppSelector((state) => state.auth);

  const handleUpload = async (base64Image: any) => {
    setCroppedImage(base64Image);
    setIsLoading(true);
    try {
      await apiRequest(`/auth/image-upload`, "PUT", token, {
        bannerData: base64Image,
      });
      toast.success("User banner uploaded.", {
        position: "top-right",
      });
    } catch (error) {
      toast.error("Fail to upload user banner.", {
        position: "top-right",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="">
      <BannerUpload
        croppedImage={croppedImage}
        handleUpload={handleUpload}
        isDefaultBanner={user?.bannerData ? false : true}
        isLoading={isLoading}
        pathname={pathname}
      />
    </div>
  );
};

export default UserBannerUpload;
