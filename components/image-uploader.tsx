// "use client";
// import { ImagePlusIcon, X } from "lucide-react";
// import { useCallback } from "react";
// import { useDropzone } from "react-dropzone";

// import { FileWithPreview } from "@/types/interface";

// const ImageUploader = ({ setFiles, files }: { setFiles: any; files: any }) => {
//   const onDrop = useCallback((acceptedFiles: File[]) => {
//     setFiles((prevFiles: any) => [
//       ...prevFiles,
//       ...acceptedFiles.map((file) =>
//         Object.assign(file, {
//           preview: URL.createObjectURL(file),
//         }),
//       ),
//     ]);
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: { "image/*": [] },
//     multiple: true,
//   });

//   const removeFile = (fileToRemove: FileWithPreview) => {
//     setFiles((files: any) => files.filter((file: any) => file != fileToRemove));
//     URL.revokeObjectURL(fileToRemove.preview);
//   };

//   return (
//     <>
//       <div className="w-[92%] ml-auto p-4">
//         <div
//           {...getRootProps()}
//           className={`p-8 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors ${
//             isDragActive
//               ? "border-blue-400 bg-blue-50"
//               : "border-gray-300 hover:border-gray-400"
//           }`}
//         >
//           <input {...getInputProps()} />
//           <div>
//             <ImagePlusIcon className="mx-auto text-gray-400" size={48} />
//             <p className="mt-2 text-sm text-gray-600">
//               {files.length > 0 ? `${files.length} selected` : ""}
//             </p>
//             <p className="mt-1 text-sm text-gray-600">
//               {isDragActive
//                 ? "Drop the images here"
//                 : "Click or drag images here to upload."}
//             </p>
//           </div>
//         </div>

//         {files.length > 0 && (
//           <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//             {files.map((file: any) => (
//               <div key={file.name} className="relative group">
//                 <img
//                   alt={file.name}
//                   className="w-full h-32 object-cover rounded-lg"
//                   src={file.preview}
//                 />
//                 <button
//                   className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//                   onClick={() => removeFile(file)}
//                 >
//                   <X size={16} />
//                 </button>
//                 <p className="mt-1 text-xs text-gray-500 truncate">
//                   {file.name}
//                 </p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default ImageUploader;

"use client";
import { ImagePlusIcon, X } from "lucide-react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { FileWithPreview } from "@/types/interface";

const ImageUploader = ({ setFiles, files }: { setFiles: any; files: any }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();

        reader.onload = (event) => {
          setFiles((prevFiles: any) => [
            ...prevFiles,
            {
              file,
              preview: URL.createObjectURL(file),
              base64: event.target?.result,
            },
          ]);
        };
        reader.readAsDataURL(file);
      });
    },
    [setFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: true,
  });

  const removeFile = (fileToRemove: FileWithPreview) => {
    setFiles((files: any) =>
      files.filter((file: any) => file !== fileToRemove)
    );
    URL.revokeObjectURL(fileToRemove.preview);
  };

  return (
    <>
      <div className="w-[92%] ml-auto p-4">
        <div
          {...getRootProps()}
          className={`p-8 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors ${
            isDragActive
              ? "border-blue-400 bg-blue-50"
              : "border-gray-300 hover:border-gray-400"
          }`}
        >
          <input {...getInputProps()} />
          <div>
            <ImagePlusIcon className="mx-auto text-gray-400" size={48} />
            <p className="mt-2 text-sm text-gray-600">
              {files.length > 0 ? `${files.length} selected` : ""}
            </p>
            <p className="mt-1 text-sm text-gray-600">
              {isDragActive
                ? "Drop the images here"
                : "Click or drag images here to upload."}
            </p>
          </div>
        </div>

        {files.length > 0 && (
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {files.map((file: any, index: number) => (
              <div key={index} className="relative group">
                <img
                  alt={file.file.name}
                  className="w-full h-32 object-cover rounded-lg"
                  src={file.preview}
                />
                <button
                  className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => removeFile(file)}
                >
                  <X size={16} />
                </button>
                <p className="mt-1 text-xs text-gray-500 truncate">
                  {file.file.name}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ImageUploader;
