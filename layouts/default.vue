<script setup>
  useHead({
    titleTemplate: "Bappy · %s"
  });

  const route = useRoute();

  const serverMeta = {
    ogImage: "~/public/og-image.png",
    twitterImage: "~/public/og-image.png",
    ogType: "website",
    ogLocale: "en_US",
    twitterCard: "summary",
    twitterCreator: "@abdullahbappy",
  };

  useSeoMeta({
    title: () => route.meta.title,
    description: () => route.meta.description,
    ogTitle: () => `Bappy · ${route.meta.title}`,
    ogImage: () => serverMeta.ogImage,
    twitterTitle: () => `Bappy · ${route.meta.title}`,
    ogDescription: () => route.meta.description,
    twitterDescription: () => route.meta.description,
    ogUrl: () => `https://abdulbasetbappy.vercel.app/${route.path}`,
    ...serverMeta
  });

</script>

<!-- Default Layout -->
<template>
  <main id="main-content">
    <slot />
  </main>
</template>
