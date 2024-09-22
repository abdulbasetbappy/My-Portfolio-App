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
          href: "/logo_180x180.png"
        },
        {
          rel: "icon",
          sizes: "32x32",
          href: "/logo_32x32.png"
        },
        {
          rel: "icon",
          sizes: "16x16",
          href: "/logo_16x16.png"
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
    },
  },
  modules: [
    "@nuxt/content",
    "@nuxtjs/partytown",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-icon",
    ['nuxt-mail', {
      message: {
        to: 'abdulbasetbappy@hotmail.com',
        from: 'no-reply@abdulbasetbappy.dev', // Set a default "from" address
      },
      smtp: {
        host: "smtp.gmail.com", // Replace with your SMTP host
        port: 587, // or 465 for SSL
        auth: {
          user: "abdulbasetbappy.official@gmail.com",
          pass: "bwvw dzsq etao mpct",
        },
      },
    }],
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
});
