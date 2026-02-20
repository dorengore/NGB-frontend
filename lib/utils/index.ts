import { setLoading, setUserManagedSpaces } from "../redux/slices/space-slice";
import { AppDispatch } from "../redux/store";

import { apiRequest } from "./api-request";

//@ts-nocheck
export const createImage = (url: any) =>
  new Promise((resolve, reject) => {
    const image = new Image();

    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.setAttribute("crossOrigin", "anonymous");
    image.src = url;
  });

export function getRadianAngle(degreeValue: any) {
  return (degreeValue * Math.PI) / 180;
}

export function rotateSize(width: any, height: any, rotation: any) {
  const rotRad = getRadianAngle(rotation);

  return {
    width:
      Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
    height:
      Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
  };
}

// export default async function getCroppedImg(
//   imageSrc,
//   pixelCrop,
//   rotation = 0,
//   flip = { horizontal: false, vertical: false }
// ) {
//   const image = await createImage(imageSrc);
//   const canvas = document.createElement("canvas");
//   const ctx = canvas.getContext("2d");

//   if (!ctx) {
//     return null;
//   }

//   const rotRad = getRadianAngle(rotation);

//   // calculate bounding box of the rotated image
//   const { width: bBoxWidth, height: bBoxHeight } = rotateSize(
//     image.width,
//     image.height,
//     rotation
//   );

//   // set canvas size to match the bounding box
//   canvas.width = bBoxWidth;
//   canvas.height = bBoxHeight;

//   // translate canvas context to a central location to allow rotating and flipping around the center
//   ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
//   ctx.rotate(rotRad);
//   ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
//   ctx.translate(-image.width / 2, -image.height / 2);

//   // draw rotated image
//   ctx.drawImage(image, 0, 0);

//   const croppedCanvas = document.createElement("canvas");

//   const croppedCtx = croppedCanvas.getContext("2d");

//   if (!croppedCtx) {
//     return null;
//   }

//   // Set the size of the cropped canvas
//   croppedCanvas.width = pixelCrop.width;
//   croppedCanvas.height = pixelCrop.height;

//   // Draw the cropped image onto the new canvas
//   croppedCtx.drawImage(
//     canvas,
//     pixelCrop.x,
//     pixelCrop.y,
//     pixelCrop.width,
//     pixelCrop.height,
//     0,
//     0,
//     pixelCrop.width,
//     pixelCrop.height
//   );

//   // As Base64 string
//   // return croppedCanvas.toDataURL('image/jpeg');

//   // As a blob
//   return new Promise((resolve, reject) => {
//     croppedCanvas.toBlob((file) => {
//       resolve(URL.createObjectURL(file));
//     }, "image/jpeg");
//   });
// }
export const getCroppedImg = (
  imageSrc: string,
  pixelCrop: any
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.src = imageSrc;
    image.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        return reject(new Error("No 2d context"));
      }

      canvas.width = pixelCrop.width;
      canvas.height = pixelCrop.height;

      ctx.drawImage(
        image,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height
      );

      // As base64 string
      resolve(canvas.toDataURL("image/jpeg"));
    };
    image.onerror = reject;
  });
};

export const getUserManagedSpaces = async (
  token: string | null,
  dispatch: AppDispatch
) => {
  dispatch(setLoading(true));
  try {
    const managedSpaces = await apiRequest("/spaces/own", "GET", token);

    dispatch(setUserManagedSpaces(managedSpaces));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};
