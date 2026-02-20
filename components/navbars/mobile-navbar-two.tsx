"use client";
import { Navbar, NavbarContent } from "@heroui/navbar";
import { MenuIcon } from "lucide-react";
import { useDisclosure } from "@heroui/modal";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import NavbarRightButtons from "../navbar-right-buttons";
import NavigationModal from "../modals/navigation-modal";

const MobileNavbarTwo = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Navbar
        className="bg-transparent  md:hidden"
        maxWidth="full"
        style={{
          position: "absolute",
        }}
      >
        <NavbarContent justify="start">
          <Button isIconOnly variant="light" onPress={onOpen}>
            <MenuIcon />
          </Button>
        </NavbarContent>
        <NavbarContent justify="center">
          <Link className="text-white" href="/">
            LOGO
          </Link>
        </NavbarContent>
        <NavbarRightButtons isMobile />
      </Navbar>
      <NavigationModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};

export default MobileNavbarTwo;
