"use client";

import { useRouter } from "next/navigation";
import { ReactNode, startTransition } from "react";
import { Link } from "@heroui/link";
import { cn } from "@heroui/theme";

import { useProgressBar } from "@/context/progress-context";

interface ProgressBarLinkProps {
  href: string;
  children: ReactNode;
  target?: string;
  className?: string;
  [key: string]: any;
}

const ProgressBarLink = ({
  href,
  children,
  target,
  className,
  ...rest
}: ProgressBarLinkProps) => {
  const router = useRouter();
  const { start, done } = useProgressBar();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (target === "_blank") return;

    e.preventDefault();
    start();
    startTransition(() => {
      done();
      router.push(href);
    });
  };

  return (
    <Link
      className={cn(`text-white`, className)}
      href={href}
      target={target}
      onClick={handleClick as any}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default ProgressBarLink;
