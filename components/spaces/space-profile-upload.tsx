"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import ProfileUpload from "../buttons/profile-upload";

import { apiRequest } from "@/lib/utils/api-request";
import { useAppSelector } from "@/lib/redux/hooks";
import { Space } from "@/lib/redux/api/space-api";

const SpaceProfileUpload = ({ space }: { space: Space }) => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const { token } = useAppSelector((state) => state.auth);

  const [croppedImage, setCroppedImage] = useState<string | null>(
    space.imageData
      ? `${space?.imageData}`
      : "/assets/images/default-avatar.png"
  );

  const handleUpload = async (base64Image: string) => {
    setCroppedImage(base64Image);
    setLoading(false);
    try {
      await apiRequest(`/spaces/${space.id}/image-upload`, "PUT", token, {
        imageData: base64Image,
      });
      toast.success("Profile Image Uploaded Successfully.", {
        position: "top-right",
      });
    } catch (error) {
      toast.error("Error Profile Image Uploading.", {
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative md:left-10 left-[50%] md:translate-x-[0%] translate-x-[-50%] top-3">
      <ProfileUpload
        adminId={space.adminId}
        croppedImage={croppedImage}
        handleUpload={handleUpload}
        isDefaultBanner={space.imageData ? false : true}
        isLoading={loading}
        pathname={pathname}
      />
    </div>
  );
};

export default SpaceProfileUpload;
