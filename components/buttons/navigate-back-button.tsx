"use client";

import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import LinkButton from "./link-button";

const NavigateBackButton = () => {
  const router = useRouter();

  return (
    <LinkButton
      isIconOnly
      className="lg:hidden mt-6 ml-4"
      href=""
      radius="full"
      size="sm"
      variant="flat"
      onClick={() => router.back()}
    >
      <ArrowLeftIcon />
    </LinkButton>
  );
};

export default NavigateBackButton;
