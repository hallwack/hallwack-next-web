"use client"

import { ThemeProvider } from "next-themes";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function LayoutProvider({ children }: Props) {
  return <ThemeProvider attribute="class" defaultTheme="system" enableSystem>{children}</ThemeProvider>;
}
