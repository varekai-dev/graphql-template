import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://swapi-graphql.eskerda.vercel.app",
  documents: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts"],
  generates: {
    "./src/shared/api/graphql/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
