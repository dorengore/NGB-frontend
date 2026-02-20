import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { CrownIcon } from "lucide-react";
import React from "react";

const NotPro = () => {
  return (
    <div className="flex  w-2/4 mx-auto text-center flex-col gap-4 items-center">
      <div className=" w-[60%]">
        <Image src="/assets/icons/pro.png" />
      </div>
      <h2 className="text-3xl font-bold">Upgrade to NBG Pro</h2>
      <p>
        Upgrade to NBG Pro to get access to advanced stats. Learn more about
        your opponents and track your own performance.
      </p>
      <Button
        className="mt-5"
        color="primary"
        radius="full"
        startContent={<CrownIcon />}
      >
        Upgrade
      </Button>
    </div>
  );
};

export default NotPro;
