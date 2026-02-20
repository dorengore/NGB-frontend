"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import ProfileUpload from "../buttons/profile-upload";

import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { apiRequest } from "@/lib/utils/api-request";
import { User } from "@/lib/redux/api";
import { setUserProfile } from "@/lib/redux/slices/auth-slice";

interface UserProfileUploadProps {
  user: User;
}

const UserProfileImgUpload = ({ user }: UserProfileUploadProps) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  // const {imageData} = useAppSelector(state=>state.auth)
  const { token } = useAppSelector((state) => state.auth);
  const pathname = usePathname();
  const [croppedImage, setCroppedImage] = useState<string | null>(
    user.imageData ? user.imageData : "/assets/images/default-avatar.png"
  );

  const handleUpload = async (base64Image: string) => {
    setCroppedImage(base64Image);
    setLoading(false);

    try {
      await apiRequest(`/auth/image-upload`, "PUT", token, {
        imageData: base64Image,
      });
      dispatch(
        setUserProfile({
          profileImage: base64Image,
        })
      );
      localStorage.setItem("imageData", `${base64Image}`);

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
    <div>
      <ProfileUpload
        croppedImage={croppedImage}
        handleUpload={handleUpload}
        isDefaultBanner={user.imageData ? false : true}
        isLoading={loading}
        pathname={pathname}
      />
    </div>
  );
};

export default UserProfileImgUpload;
