import MobileNavbar from "@/components/navbars/mobile-navbar";
import { Navbar } from "@/components/navbars/navbar";
import Servers from "@/components/servers";
import BottomNavigationTabs from "@/components/tabs/bottom-navigation.tabs";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <MobileNavbar />
      <main className="flex flex-grow">
        <Servers />
        <div className="flex-grow overflow-y-auto ">
          <div className="container mx-auto max-w-[1600px] md:pd-0">
            {children}
          </div>
        </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 z-[500]">
        <BottomNavigationTabs />
      </div>
    </div>
  );
}
