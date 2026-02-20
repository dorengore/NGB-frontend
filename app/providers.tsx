"use client";

import * as React from "react";
import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

import StoreProvider from "@/lib/redux/store-provider";
import AuthInitializer from "@/lib/redux/auth-initializer";
import { ProgressBar } from "@/context/progress-context";
import { TournamentProvider } from "@/context/tournament-context";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <StoreProvider>
      <ProgressBar>
        <HeroUIProvider navigate={router.push}>
          <NextThemesProvider {...themeProps}>
            <AuthInitializer>
              <TournamentProvider>{children}</TournamentProvider>
            </AuthInitializer>
          </NextThemesProvider>
        </HeroUIProvider>
      </ProgressBar>
    </StoreProvider>
  );
}
