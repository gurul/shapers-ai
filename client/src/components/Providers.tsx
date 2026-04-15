"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

import ErrorBoundary from "@/components/ErrorBoundary";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ErrorBoundary>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
        disableTransitionOnChange
      >
        <TooltipProvider>
          {children}
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
