"use client";

import { Button } from "@heroui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    // console.error(error);
  }, [error]);

  return (
    <div className="flex h-full flex-col items-center justify-center w-full gap-4">
      <h2 className="text-4xl">{error.message}</h2>

      <div className="flex gap-4">
        <Button onClick={reset}>Refetch</Button>
      </div>
    </div>
  );
}
