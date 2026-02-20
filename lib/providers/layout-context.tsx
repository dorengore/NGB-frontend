"use client";

import { createContext, ReactNode, useContext } from "react";

const LayoutContext = createContext({});

export const LayoutProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: any;
}) => {
  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};

export const useLayoutContext = () => {
  return useContext(LayoutContext);
};
