import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal";
import { Slider } from "@heroui/slider";

import { getCroppedImg } from "@/lib/utils";

interface ImageUploadModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  selectedImage: string | undefined;
  onUpload: (croppedImage: any) => void;
  aspect: number;
  isLoading?: boolean;
}

const ImageUploadModal: React.FC<ImageUploadModalProps> = ({
  isOpen,
  onOpenChange,
  selectedImage,
  onUpload,
  aspect,
  isLoading,
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback(
    (_croppedArea: any, croppedAreaPixels: any) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    [],
  );

  const handleUpload = useCallback(async () => {
    if (croppedAreaPixels && selectedImage) {
      try {
        const croppedImage = await getCroppedImg(
          selectedImage,
          croppedAreaPixels,
        );

        onUpload(croppedImage);
        onOpenChange();
      } catch (e) {
        console.error(e);
      }
    }
  }, [croppedAreaPixels, selectedImage, onUpload, onOpenChange]);

  return (
    <Modal
      backdrop="opaque"
      classNames={{
        body: "py-6",
        backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
        base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
        header: "border-b-[1px] border-[#292f46]",
        footer: "border-t-[1px] border-[#292f46]",
        closeButton: "hover:bg-white/5 active:bg-white/10",
      }}
      isDismissable={false}
      isOpen={isOpen}
      radius="lg"
      scrollBehavior="outside"
      size="xl"
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        <ModalHeader>Image Upload</ModalHeader>
        <ModalBody>
          <div className="relative h-[350px]">
            <Cropper
              aspect={aspect}
              crop={crop}
              image={selectedImage}
              zoom={zoom}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>
          <Slider
            aria-label="Zoom"
            className="mt-4"
            maxValue={3}
            minValue={1}
            size="sm"
            step={0.1}
            value={zoom}
            onChange={(value) => setZoom(value as number)}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" isLoading={isLoading} onPress={handleUpload}>
            Upload
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ImageUploadModal;
