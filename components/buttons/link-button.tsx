"use client";
import React, { forwardRef, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Button, ButtonProps } from "@heroui/button";

import { useProgressBar } from "@/context/progress-context";

export interface LinkButtonProps extends ButtonProps {
  href: string;
  children: ReactNode;
}

const LinkButton = forwardRef<HTMLButtonElement, LinkButtonProps>(
  (props, ref) => {
    const { href, children, onClick, ...otherProps } = props;

    const router = useRouter();
    const { start, done } = useProgressBar();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      start();

      // Call the original onClick if provided
      if (onClick) {
        onClick(e);
      }

      // Use setTimeout to ensure the progress bar has time to start
      setTimeout(() => {
        router.push(href);
        done();
      }, 100);
    };

    return (
      <Button ref={ref} {...otherProps} onClick={handleClick as any}>
        {children}
      </Button>
    );
  },
);

LinkButton.displayName = "LinkButton";

export default LinkButton;
