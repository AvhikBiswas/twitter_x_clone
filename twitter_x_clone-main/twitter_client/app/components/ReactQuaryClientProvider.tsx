"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const queryClient = new QueryClient();

export const ReactQuaryClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <QueryClientProvider client={queryClient}>{children}
    <ReactQueryDevtools initialIsOpen={true} />
  </QueryClientProvider>
);
