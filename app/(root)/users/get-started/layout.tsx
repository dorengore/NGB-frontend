import { ReactNode } from "react";

const GetStartedLayout = ({ children }: { children: ReactNode }) => {
  return <section className="w-full">{children}</section>;
};

export default GetStartedLayout;
