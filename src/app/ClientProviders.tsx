// src/app/ClientProviders.tsx
"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CustomThemeProvider from "@/components/ui/CustomThemeProvider";

const queryClient = new QueryClient();

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <CustomThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        {children}
      </CustomThemeProvider>
    </QueryClientProvider>
  );
}
