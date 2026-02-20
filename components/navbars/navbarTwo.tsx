"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";

import NavbarRightButtons from "../navbar-right-buttons";

const NavbarTwo = () => {
  return (
    <Navbar
      className="bg-transparent hidden md:block"
      maxWidth="full"
      style={{
        position: "absolute",
      }}
    >
      <NavbarBrand>
        <Link color="foreground" href="/">
          NBH
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Download
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Organizers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Brands
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Communities
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Developers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Pricing
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarRightButtons isNavbarTwo />
    </Navbar>
  );
};

export default NavbarTwo;
