import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://swapi-graphql.eskerda.vercel.app",
  documents: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts", "!src/shared/api/graphql/__generated__/**"],
  generates: {
    "./src/shared/api/graphql/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
      config: {
        useTypeImports: true,
      },
    },
    "./src/shared/api/graphql/__generated__/hooks.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        useTypeImports: true,
        withHooks: true,
        withComponent: false,
        withHOC: false,
        apolloClientVersion: 4,
        reactApolloVersion: 4,
        apolloClientImportFrom: "@apollo/client/react",
        reactApolloImportFrom: "@apollo/client/react",
        skipTypename: false,
        dedupeFragments: true,
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
