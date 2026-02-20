import { ReactNode } from "react";

const AboutLayout = ({ children }: { children: ReactNode }) => {
  return <section className="w-full">{children}</section>;
};

export default AboutLayout;
