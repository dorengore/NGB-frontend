import { Image } from "@heroui/image";
import { Navbar, NavbarBrand, NavbarContent } from "@heroui/navbar";
import NextLink from "next/link";

import NavbarRightButtons from "../navbar-right-buttons";

import logo from "@/assets/images/game-logo.png";

const MobileNavbar = () => {
  return (
    <Navbar
      className="bg-[#1B1726] text-white md:hidden"
      maxWidth="full"
      position="static"
    >
      {/* <div className="flex items-center justify-between bg-green-400 w-full"> */}
      <NavbarContent className="" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image alt="logo" height={40} src={logo.src} width={40} />
            <p className="font-bold text-inherit">NBG</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarRightButtons isMobile />
    </Navbar>
  );
};

export default MobileNavbar;
