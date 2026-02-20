"use client";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import DropdownWithSections from "./dropdown-with-sections";

import type { DropdownSectionType } from "@/types/interface";

const MoreLinksNavbar = () => {
  const router = useRouter();

  const dropdownSections: DropdownSectionType[] = [
    {
      title: "General",
      items: [
        {
          key: "hc",

          label: "Help Center",
          href: "/help",
          // onPress: () => router.push(),
        },
        {
          key: "download",

          label: "Download",
          href: `${process.env.NEXT_PUBLIC_URL}/download`,
          target: "_blank",
        },
        {
          key: "about",
          label: "About",
          target: "_blank",
          href: `${process.env.NEXT_PUBLIC_URL}/about`,
        },
      ],
    },
    {
      title: "Work with us",
      items: [
        {
          key: "pricing",

          label: "Pricing",
          onPress: () => toast.success("Pricing clicked"),
        },
        {
          key: "organizers",
          label: "Organizers",
          onPress: () => toast.success("Organizers clicked"),
        },
        {
          key: "brands",

          label: "Brands",
          onPress: () => toast.success("Brands clicked"),
        },
        {
          key: "communities",

          label: "Communities",
          href: `${process.env.NEXT_PUBLIC_URL}/communities`,
          target: "_blank",
        },
        {
          key: "contact",

          label: "Contact",
          target: "_blank",
          href: `${process.env.NEXT_PUBLIC_URL}/contact`,
        },
      ],
    },
    {
      title: "Legal",
      items: [
        {
          key: "privacy-policy",
          target: "_blank",
          label: "Privacy Policy",
          href: `${process.env.NEXT_PUBLIC_URL}/privacy-policy`,
        },
        {
          key: "terms-of-use",
          label: "Terms of Use",
          target: "_blank",
          href: `${process.env.NEXT_PUBLIC_URL}/terms-of-use`,
        },
      ],
    },
  ];

  return <DropdownWithSections sections={dropdownSections} />;
};

export default MoreLinksNavbar;
