<script setup>
definePageMeta({
  title: "Projects by Abdul Baset Bappy",
  description: "Explore the Projects Built by Abdul Baset Bappy, a Skilled Full-Stack Developer with 1+ years of Experience in Nuxt.js, Node.js.",
});

// Fetch all other projects
const { pending, data: projects } = await useLazyAsyncData(
  "projects",
  () => queryContent("/projects/projects").findOne(),
  {
    transform: (projects) => {
      return {
        visual: projects.body.filter((project) => project.visual),
        nonVisual: projects.body.filter((project) => !project.visual),
      };
    },
  }
);
</script>

<!-- Projects Page -->
<template>
  <article>
    <!-- Header -->
    <h1 class="mb-4 text-3xl font-bold text-left">Projects</h1>
    <p class="mb-6 text-zinc-700 dark:text-zinc-300">
      Each project is a story waiting to be told.
    </p>
    
    <!-- Featured Projects Section -->
    <section class="grid grid-cols-1 grid-rows-2 gap-4 mb-10 lg:grid-cols-3 lg:grid-flow-row">
      <template v-if="pending">
        <app-project-skeleton
          v-for="skeletonId in generateKeys(4)"
          :key="skeletonId"
        />
      </template>
      <template v-else>
        <app-project-card
          v-for="project in projects.visual"
          :key="project.name"
          :image="project.image"
          :title="project.name"
          :url="project.liveUrl"
        />
      </template>
    </section>

    <!-- Link to More Projects -->
    <nuxt-link
      to="/projects/more"
      class="flex items-center justify-center w-24 py-2 font-semibold no-underline duration-150 bg-green-500 rounded-md focus-visible:global-focus text-zinc-800 group/hover-effect"
    >
      More
      <Icon name="heroicons:chevron-right-20-solid" class="ml-1 group-hover/hover-effect:translate-x-1" />
    </nuxt-link>

  </article>
</template>
