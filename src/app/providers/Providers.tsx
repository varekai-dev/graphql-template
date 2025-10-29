import { ApolloProvider } from "@apollo/client/react";
import { apolloClient } from "@shared/config/apollo-client";
import type { ReactNode } from "react";

type ProvidersProps = {
  children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
