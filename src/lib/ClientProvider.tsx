"use client";

import React from "react";
import { ApolloProvider } from "@apollo/client";
import { Provider as ReduxProvider } from "react-redux";
import { ApolloWrapper } from "@/app/ApolloWrapper";
import store from "@/store";  

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <ApolloWrapper>
        {children}
      </ApolloWrapper>
    </ReduxProvider>
  );
}