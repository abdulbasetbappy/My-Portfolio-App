<script setup>
  useHead({
    titleTemplate: "%s · Bappy"
  });

  const route = useRoute();

  const serverMeta = {
    ogImage: "/og-image.png",
    twitterImage: "/og-image.png",
    ogType: "website",
    ogLocale: "en_US",
    twitterCard: "summary",
    twitterCreator: "@abdullahbappy",
  };

  useSeoMeta({
    title: () => route.meta.title,
    description: () => route.meta.description,
    ogTitle: () => `${route.meta.title} · Bappy`,
    twitterTitle: () => `${route.meta.title} · Bappy`,
    ogDescription: () => route.meta.description,
    twitterDescription: () => route.meta.description,
    ogUrl: () => `https://abdulbasetbappy.dev${route.path}`,
    ...serverMeta
  });

</script>

<!-- Default Layout -->
<template>
  <main id="main-content">
    <slot />
  </main>
</template>
