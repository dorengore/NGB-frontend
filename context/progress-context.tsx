// @ts-nocheck
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, createContext, useContext } from "react";
import { Progress } from "@heroui/progress";

import useProgress from "@/hooks/use-progress";

export const ProgressBarContext = createContext<ReturnType<
  typeof useProgress
> | null>(null);

export function useProgressBar() {
  let progress = useContext(ProgressBarContext);

  if (progress === null) {
    throw new Error("Can only be used within <ProgressBar>");
  }

  return progress;
}

export function ProgressBar({ children }: { children: ReactNode }) {
  let progress = useProgress();
  // let width = useMotionTemplate`${progress.value}%`;

  return (
    <ProgressBarContext.Provider value={progress}>
      <AnimatePresence onExitComplete={progress.reset}>
        {progress.state !== "complete" && progress.state !== "initial" && (
          <motion.div
            className="fixed z-[999] top-0 w-full"
            exit={{ opacity: 0 }}
            initial={{ opacity: 1 }}
          >
            <Progress isIndeterminate radius="none" size="sm" />
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </ProgressBarContext.Provider>
  );
}
