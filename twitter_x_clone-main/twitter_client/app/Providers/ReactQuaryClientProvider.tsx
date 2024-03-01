"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
const queryClient = new QueryClient();

export const ReactQuaryClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <NextUIProvider>
    <NextThemesProvider attribute="class" defaultTheme="dark">
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </NextThemesProvider>
  </NextUIProvider>
);
