import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { QrCodeIcon } from "lucide-react";

import bgImage from "@/assets/images/auth-bg.png";
import DownloadCard from "@/components/cards/download/download-card";

const DownloadAppPage = () => {
  return (
    <div className="">
      <div
        className={` w-full relative bg-cover h-screen`}
        style={{
          backgroundImage: `url(${bgImage.src})`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7))",
          }}
        />
        <div className="flex  flex-col-reverse md:flex-row relative  p-7 py-32  z-20  items-center justify-between gap-10">
          <div className="flex flex-col gap-4 md:gap-10 ">
            <h2 className="xl:text-8xl text-4xl md:text-4xl font-bold">
              NBG for Windows
            </h2>

            <p className="text-xl">
              Faster and better - the true way to experience NBG.
            </p>

            <Button
              className="font-bold text-lg w-fit px-7"
              color="primary"
              radius="full"
            >
              Download for Windows
            </Button>
          </div>
          <div className="md:w-2/4 lg:w-full">
            <Image src="/assets/images/community-hero-img.png" />
          </div>
        </div>
      </div>

      <div className="px-4 my-20 gap-4 grid md:grid-cols-2">
        <DownloadCard
          icon={"/assets/icons/ios.svg"}
          platformImage="/assets/images/ios-img.png"
          platformName="IOS"
          qrCode={QrCodeIcon}
        />
        <DownloadCard
          icon="/assets/icons/android.svg"
          platformImage="/assets/images/andriod-img.png"
          platformName="Android"
          qrCode={QrCodeIcon}
        />
      </div>
    </div>
  );
};

export default DownloadAppPage;
