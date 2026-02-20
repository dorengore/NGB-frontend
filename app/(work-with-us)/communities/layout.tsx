import { ReactNode } from "react";

const CommunitiesLayout = ({ children }: { children: ReactNode }) => {
  return <section className="w-full">{children}</section>;
};

export default CommunitiesLayout;
