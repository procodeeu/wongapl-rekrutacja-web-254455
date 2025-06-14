import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.GITHUB_BRANCH || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  
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
        name: "ourProjects",
        label: "Najnowsze projekty",
        path: "src/content/ourProjects",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Tytuł",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Data publikacji",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Opis",
            required: false,
          },
          {
            type: "boolean",
            name: "published",
            label: "Opublikowane",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Treść",
            isBody: true,
          },
        ],
      },
      {
        name: "footer_links",
        label: "Linki w stopce",
        path: "src/content/footer-links",
        format: "yaml",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Tytuł",
            isTitle: true,
            required: true,
          },
          {
            type: "object",
            name: "links",
            label: "Linki",
            list: true,
            fields: [
              {
                type: "string",
                name: "text",
                label: "Tekst",
                required: true,
              },
              {
                type: "string",
                name: "url",
                label: "URL",
                required: true,
              },
              {
                type: "boolean",
                name: "external",
                label: "Link zewnętrzny",
                required: false,
              },
            ],
          },
        ],
      },
      {
        name: "footer_text",
        label: "Tekst w stopce",
        path: "src/content/footer-text",
        format: "yaml",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Tytuł",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "content",
            label: "Treść",
            required: true,
          },
        ],
      },
    ],
  },
});