import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ['@nuxt/image'],
  app: {
    head: {
      title: "Frontend Assignment",
      meta: [
        {
          name: "description",
          content:
            "A frontend developer assignment built with Nuxt 3 + Tailwind CSS",
        },
      ],
    },
  },
  css: ["@/assets/css/tailwind.css"],
   postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },
});
