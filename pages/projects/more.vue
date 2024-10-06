<script setup>
definePageMeta({
  title:
    "More Projects using Vuejs, Reactjs, Nextjs, Nuxtjs and Vanilla JavaScript",
  description:
    "More Small and Solo Projects using Vuejs, Reactjs, Nextjs, Nuxtjs, Vanilla JavaScript that I am Currently Working on and have Worked on.",
});

// Fetch all other projects
const { pending, data: projects } = await useLazyAsyncData(
  "all-projects",
  () => queryContent("/projects/more").findOne(),
  {
    transform: (projects) => {
      return {
        visual: projects.body.filter((project) => project.visual),
        nonVisual: projects.body.filter((project) => !project.visual),
      };
    },
  }
);

// Log the fetched data to check the structure (for debugging)
console.log("Projects:", projects.value);
</script>

<!-- Projects.more() Page -->
<template>
  <article>
    <h1 class="mb-4 text-3xl font-bold text-left">
      Projects<span class="font-mono text-green-500">.more()</span>
    </h1>
    <p class="mb-6 text-zinc-700 dark:text-zinc-300">
      I build things in the open. Check out
      <nuxt-link
        target="_blank"
        to="https://github.com/abdulbasetbappy"
        class="border-b-[.1rem] border-b-green-500/75 focus-visible:global-focus"
        external
        >my GitHub profile</nuxt-link
      >.
    </p>
    <!-- Visual Projects -->
    <section class="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-3">
      <template v-if="pending">
        <app-project-skeleton
          v-for="skeletonId in generateKeys(4)"
          :key="skeletonId"
        />
      </template>
      <template v-else>
          <template v-if="projects.visual.length > 0">
            <!-- Loop through the first 2 projects -->
            <app-project-card
              v-for="(project, index) in projects.visual"
              :key="index"
              :image="project.image"
              :title="project.name"
              :url="project.liveUrl"
              :isExternalUrl="true"
              class="w-full"
            />
          </template>
          <p v-else>No projects available.</p>
        </template>
    </section>

    <app-divider class="my-6 md:my-8" />

    <!-- Non-Visual Projects -->
      <section class="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-3">
        <template v-if="pending">
          <app-project-skeleton
            v-for="skeletonId in generateKeys(4)"
            :key="skeletonId"
          />
        </template>
        <template v-else>
          <template v-if="projects.nonVisual.length > 0">
            <!-- Loop through the remaining projects -->
            <app-project-card
              v-for="(project, index) in projects.nonVisual"
              :key="index"
              :image="project.image"
              :title="project.name"
              :url="project.liveUrl"
              :isExternalUrl="true"
              class="w-full"
            />
          </template>
          <p v-else>No projects available.</p>
        </template>
      </section>

    <!-- Link to Featured Projects -->
    <nuxt-link
      to="/projects"
      class="flex items-center justify-center w-24 py-2 mt-6 font-semibold no-underline duration-150 bg-green-500 rounded-md focus-visible:global-focus text-zinc-800 group/hover-effect"
    >
      <Icon
        name="heroicons:chevron-left-20-solid"
        class="mr-1 group-hover/hover-effect:-translate-x-1"
      />
      Back
    </nuxt-link>
  </article>
</template>
