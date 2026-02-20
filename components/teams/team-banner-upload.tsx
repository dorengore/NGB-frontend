"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import BannerUpload from "../buttons/banner-upload";

import { useAppSelector } from "@/lib/redux/hooks";
import { Team } from "@/types/interface";
import { apiRequest } from "@/lib/utils/api-request";

const TeamBannerUpload = ({ team }: { team: Team }) => {
  const pathname = usePathname();
  const { token } = useAppSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [croppedImage, setCroppedImage] = useState<string | undefined>(
    team.imageData ? `${team.imageData}` : "/assets/images/default-bg.jpg"
  );

  // const [croppedImage, setCroppedImage] = useState<string | undefined>(
  //   "/assets/images/default-bg.jpg",
  // );

  const handleUpload = async (base64Image: string) => {
    setCroppedImage(base64Image);
    setLoading(true);
    try {
      await apiRequest(`/teams/image-upload/${team.id}`, "PUT", token, {
        bannerData: base64Image,
      });
      toast.success("Banner Image Uploaded Successfully.", {
        position: "top-right",
      });
    } catch (error) {
      toast.error("Error Banner Image Uploading.", {
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-full">
      <BannerUpload
        adminId={team.adminId}
        croppedImage={croppedImage}
        handleUpload={handleUpload}
        isDefaultBanner={team.imageData ? false : true}
        isLoading={loading}
        pathname={pathname}
      />
    </div>
  );
};

export default TeamBannerUpload;
