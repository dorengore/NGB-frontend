import { ReactNode } from "react";

import bgImage from "@/assets/images/auth-bg.png";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section
      className={`fixed w-full bg-cover`}
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10">{children}</div>
    </section>
  );
};

export default AuthLayout;
