import { ReactNode } from "react";

import NavbarTwo from "@/components/navbars/navbarTwo";
import FooterWithSocialLinks from "@/components/footer";
import MobileNavbarTwo from "@/components/navbars/mobile-navbar-two";

const PagesWithDifferentLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <NavbarTwo />
      <MobileNavbarTwo />
      <main className="container mx-auto max-w-[1440px] flex">{children}</main>
      <FooterWithSocialLinks />
    </section>
  );
};

export default PagesWithDifferentLayout;
