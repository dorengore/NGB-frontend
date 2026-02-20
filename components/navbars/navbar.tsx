import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import Image from "next/image";

import MoreLinksNavbar from "../more-links-navbar";
import NavbarRightButtons from "../navbar-right-buttons";
import ProgressBarLink from "../progress/progress-link";

import { siteConfig } from "@/config/site";
import logo from "@/assets/images/game-logo.png";

export const Navbar = () => {
  return (
    <NextUINavbar
      className="bg-[#212529] shadow-small text-white hidden md:block "
      maxWidth="full"
    >
      {/* <div className="flex items-center justify-between bg-green-400 w-full"> */}
      <NavbarContent className="" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <ProgressBarLink
            className="flex justify-start items-center gap-1"
            href="/"
          >
            <Image alt="logo" height={50} src={logo.src} width={50} />
            <p className="font-bold text-inherit">NBG</p>
          </ProgressBarLink>
        </NavbarBrand>
        <ul className=" flex gap-4 justify-start ml-8">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              {/* <NextLink
                className={clsx(
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink> */}
              <ProgressBarLink href={item.href}>{item.label}</ProgressBarLink>
            </NavbarItem>
          ))}
        </ul>
        <NavbarItem>
          <MoreLinksNavbar />
        </NavbarItem>
      </NavbarContent>

      {/* <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="center"
      >
        <NavbarItem className="hidden lg:flex">
          <SearchInput />
        </NavbarItem>
      </NavbarContent> */}

      <NavbarRightButtons />
      {/* </div> */}
    </NextUINavbar>
  );
};
