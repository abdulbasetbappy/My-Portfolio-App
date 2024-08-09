import tailwindTypography from "@tailwindcss/typography";

export default defineNuxtConfig({
  app: {
    rootId: "app",
    rootTag: "body",
    head: {
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
        { name: "author", content: "Bappy (@abdulbasetbappy)" },
        { name: "robots", content: "index, follow" }
      ],
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/logo.png"
        },
        {
          rel: "icon",
          sizes: "32x32",
          href: "/logo.png"
        },
        {
          rel: "icon",
          sizes: "16x16",
          href: "/logo.png"
        },
        {
          rel: "manifest",
          href: "/site.webmanifest"
        }
      ],
      script: [
        {
          type: "text/partytown",
          src: "https://abdulbasetbappy.dev",
          async: true,
        }
      ]
    },
    pageTransition: { name: "slide", mode: "out-in" },
    layoutTransition: { name: "slide", mode: "out-in" }
  },
  components: [{ path: "~/components", pathPrefix: false }],
  content: {
    contentHead: false,
    documentDriven: false,
    highlight: {
      theme: "github-dark",
      preload: ["py"]
    },
    ignores: ["drafts", "template.md", "/drafts/", "\\.yml$"],
    markdown: {
      toc: { depth: 1, searchDepth: 2 }
    }
  },
  modules: [
    "@nuxt/content",
    "@nuxtjs/partytown",
    "@nuxtjs/turnstile",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-icon"
  ],
  routeRules: {
    "/": { prerender: true },
    "/**": { prerender: true },
    "/Contacts": { isr: 3600 }
  },
  tailwindcss: {
    config: {
      mode: "jit",
      darkMode: "class",
      content: [
        "./app.vue",
        "./components/**/*.vue",
        "./layouts/**/*.vue",
        "./pages/**/*.vue"
      ],
      plugins: [tailwindTypography]
    }
  },
  telemetry: false,
  turnstile: {
    siteKey: "0x4AAAA818569AAABlDwSHN3HVmFWH"
  }
});
