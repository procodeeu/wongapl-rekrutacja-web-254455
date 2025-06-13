import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.GITHUB_BRANCH || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  
  schema: {
    collections: [
      {
        name: "pages",
        label: "Strony",
        path: "src/content/pages",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Tytuł",
            isTitle: true,
            required: true,
          },
        ],
      },
    ],
  },
});