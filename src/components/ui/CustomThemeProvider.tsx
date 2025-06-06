// src/components/ui/CustomThemeProvider.tsx
"use client";

import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes";
import { ReactNode } from "react";

interface Props extends Omit<ThemeProviderProps, "children"> {
  children: ReactNode;
}

export default function CustomThemeProvider({ children, ...props }: Props) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
