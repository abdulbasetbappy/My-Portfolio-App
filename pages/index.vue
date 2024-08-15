<script setup>
definePageMeta({
  title: "Bappy · Frotnend Engineer",
  description: "I craft efficient and user-friendly systems.",
});

useHead({
  titleTemplate: "",
});

const route = useRoute();

useSeoMeta({
  ogTitle: () => route.meta.title,
  twitterTitle: () => route.meta.title,
});

const skillset = ref({
  essentials: [
    "TypeScript",
    "Nuxt.Js",
    "Vue.Js",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
  ],
  tinker: [
    "GraphQL Integration",
    "Web Performance Optimization",
    "State Management",
    "Reuseability",
  ],
});

// Fetch latest 2 blog posts
const { pending: blogsPending, data: blogPosts } = await useLazyAsyncData(
  "featured-posts",
  () => queryContent("/blog").sort({ published_on: -1 }).limit(2).find()
);

// Fetch 2 featured projects
const { pending: projectsPending, data: projects } = await useLazyAsyncData(
  "featured-projects",
  () => queryContent("/projects").limit(2).find()
);
</script>

<!-- Landing Page -->
<template>
  <article class="[&>*]:my-4 first:[&>*]:mt-0 [&>hr]:my-6 md:[&>hr]:my-10">
    <!-- Introduction -->
    <section>
      <div class="flex items-center justify-between">
        <h1 class="mb-4 text-2xl font-semibold">
          Hi, I'm Bappy
          <span id="wave">👋</span>
        </h1>
        <!--Download Resume-->
        <a
          class="relative w-28 flex flex-col items-center justify-center sm:px-2 lg:px-3 sm:pt-2 lg:pt-2 pb-1 pt-1 sm:pb-2 overflow-hidden font-medium rounded-md focus-visible:global-focus card-style hover:ring-2 hover:ring-offset-0 hover:ring-green-400 hover:ring-opacity-75"
          href="/Bappy's Resume.pdf"
          download="Bappy's Resume"
        >
          <span class="mr-[1.25rem]">Resume</span>
          <Icon
            name="heroicons:arrow-down-tray-20-solid"
            size="1.25rem"
            aria-label="Opens Download Modal For File"
            class="absolute flex-shrink-0 text-green-500 sm:top-2 top-1 right-2"
          />
        </a>
      </div>

      <p class="mb-4 text-xl font-medium text-zinc-700 dark:text-zinc-300">
        I craft
        <span class="highlight">Efficient</span>
        and <span class="highlight">User-Friendly</span>
        systems.
      </p>
      <p class="my-2 text-zinc-700 dark:text-zinc-300">
        I am
        <span class="subtle-highlight">currently seeking opportunities</span>
        to share my passion and expertise.
      </p>
    </section>
    <!-- Skills -->
    <section>
      <h2 class="py-2 mb-1 text-xl font-semibold">My Skills</h2>
      <!-- Primary Tools -->
      <p class="mb-3 text-zinc-700 dark:text-zinc-300">
        My specialty is <span class="subtle-highlight">solving problems</span>,
        and my toolbox includes:
      </p>
      <ul
        class="grid w-full grid-flow-col-dense grid-rows-3 p-0 pl-2 mb-3 list-disc gap-y-2 lg:w-3/4"
      >
        <li
          v-for="skillName in skillset.essentials"
          :key="skillName"
          class="text-green-500 list-inside"
        >
          <span class="font-medium text-zinc-700 dark:text-zinc-300">{{
            skillName
          }}</span>
        </li>
      </ul>
      <!-- Secondary Tools -->
      <p class="mb-3 text-zinc-700 dark:text-zinc-300">
        I'm
        <span class="subtle-highlight">always learning</span> and exploring:
      </p>
      <ul
        class="grid w-full grid-flow-col-dense grid-rows-2 p-0 pl-2 mb-3 list-disc gap-y-2 lg:w-3/4"
      >
        <li
          v-for="skillName in skillset.tinker"
          :key="skillName"
          class="text-green-500 list-inside"
        >
          <span class="font-medium text-zinc-700 dark:text-zinc-300">{{
            skillName
          }}</span>
        </li>
      </ul>
    </section>
    <!-- Projects -->
    <section>
      <h2 class="w-auto mb-2 text-xl font-semibold group">
        <nuxt-link
          to="/projects"
          class="flex items-center w-full py-2 rounded-lg focus-visible:global-focus"
        >
          My Projects
          <Icon
            name="heroicons:chevron-right-solid"
            class="ml-2 text-green-500 group-hover:translate-x-1"
          />
        </nuxt-link>
      </h2>
      <p class="mb-4 text-zinc-700 dark:text-zinc-300">
        Passion turned into Pixels.
      </p>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-2">
        <template v-if="projectsPending">
          <app-project-skeleton
            v-for="skeletonId in generateKeys(2)"
            :key="skeletonId"
          />
        </template>
        <template v-else>
          <app-project-card
            v-for="project in projects"
            :key="project.title"
            :icon="project.icon"
            :project-title="project.title"
            :project-description="project.description"
            :project-url="project._path"
          />
        </template>
      </div>
    </section>
    <!-- Latest Blog Posts -->
    <section>
      <h2 class="w-auto mb-2 text-xl font-semibold group">
        <nuxt-link
          to="/blog"
          class="flex items-center w-full py-2 rounded-lg focus-visible:global-focus"
        >
          My Articles
          <Icon
            name="heroicons:chevron-right-solid"
            class="ml-2 text-green-500 group-hover:translate-x-1"
          />
        </nuxt-link>
      </h2>
      <p class="mb-4 text-zinc-700 dark:text-zinc-300">
        Writing as a tool for thinking.
      </p>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <template v-if="blogsPending">
          <app-blog-skeleton
            v-for="skeletonId in generateKeys(2)"
            :key="skeletonId"
          />
        </template>
        <template v-else>
          <app-blog-card
            v-for="blogPost in blogPosts"
            :key="blogPost._id"
            :tags="blogPost.tags"
            :blog-title="blogPost.title"
            :title="blogPost.title"
            :url="blogPost._path"
            :pub-date="blogPost.published_on"
            :cover-image="blogPost.image"
          />
        </template>
      </div>
    </section>
    <app-divider />
    <!-- Other Links -->
    <section class="mb-2 space-y-2">
      <h2 class="py-2 mb-1 text-xl font-semibold">Others</h2>
      <div
        class="grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:grid-flow-col gap-2 lg:[&_:first-child]:row-span-2 [&_:first-child]:col-span-2 lg:[&_:first-child]:col-span-1"
      >
        <!--Send Message-->
        <div
          class="flex items-center justify-center p-[1px] overflow-hidden font-medium shrink-0 relative -z-0 before:content-[''] before:absolute before:-inset-[1px] before:-z-10 before:bg-gradient-to-b before:from-green-500 before:to-lime-400 rounded-[calc(.375rem+1px)] dark:before:opacity-60 focus-within:ring-2 ring-offset-0 focus-within:ring-green-400 focus-within:ring-opacity-75"
        >
          <div
            class="flex flex-col items-center justify-center w-full h-full gap-6 p-4 bg-white rounded-md dark:bg-zinc-800"
          >
            <p class="text-lg font-bold">Let's Chat.</p>
            <nuxt-link
              class="px-4 py-2 bg-green-500 rounded-lg focus-visible:outline-none text-zinc-800"
              to="/contact"
              id="contact-btn"
              >Message</nuxt-link
            >
          </div>
        </div>
        <!--LeetCode-->
        <Nuxt-Link
          class="relative flex flex-col items-center justify-center px-2 pt-2 pb-3 overflow-hidden font-medium rounded-md focus-visible:global-focus card-style hover:ring-2 hover:ring-offset-0 hover:ring-green-400 hover:ring-opacity-75"
          to="/leetcode"
        >
          <Icon
            name="fluent-emoji:teacup-without-handle"
            size="2.5rem"
            class="p-1 mb-2"
          />
          <span>LeetCode</span>
        </Nuxt-Link>
        <!--Codepen-->
        <Nuxt-Link
          class="relative flex flex-col items-center justify-center px-2 pt-2 pb-3 overflow-hidden font-medium rounded-md focus-visible:global-focus card-style hover:ring-2 hover:ring-offset-0 hover:ring-green-400 hover:ring-opacity-75"
          to="/Codepen"
        >
          <Icon name="fluent-emoji:pen" size="2.5rem" class="p-1 mb-2" />
          <span>Codepen</span>
        </Nuxt-Link>
        <!--Live Meet-->
        <app-link-card
          label="Live Meet"
          icon="fluent-emoji:alarm-clock"
          :is-external-url="true"
          url="https://calendly.com/abdulbasetbappy-pro/30min"
        ></app-link-card>
        <!--Youtube-->
        <app-link-card
          label="Youtube"
          icon="fluent-emoji:video-camera"
          :is-external-url="true"
          url="https://www.youtube.com/@FrontendTalks"
        ></app-link-card>
      </div>
    </section>
  </article>
</template>

<style scoped>
#contact-btn {
  animation: 1500ms linear 2000ms infinite pulse;
}

@keyframes pulse {
  0% {
    box-shadow: #4ade80 0 0 0 0;
  }
  50% {
    box-shadow: #4ade8000 0 0 0 0.5rem;
  }
}

#wave {
  @apply inline-block ml-1 origin-[70%_70%] animate-[10s_ease_2s_infinite_wave] hover:animate-[1.5s_ease_hoverwave];
}

@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  2.5%,
  7.5% {
    transform: rotate(14deg);
  }
  5% {
    transform: rotate(-8deg);
  }
  10% {
    transform: rotate(-4deg);
  }
  12.5% {
    transform: rotate(10deg);
  }
  15% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes hoverwave {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
