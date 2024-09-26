<script setup>
definePageMeta({
  title: "Problems Solution | My JavaScript Coding Challenges and Solutions",
  description: "My collection of (imperfect) solutions to various LeetCode problems. Explore my approach to coding challenges as I strive to improve my problem-solving skills."
});

// Fetch all LeetCode solutions
const { pending, data: codeSolutions } = await useAsyncData("leetcode", () =>
  queryContent("/problems-solution/leetcode").find()
);
// Fetch all UI solutions
const { index, data: uiSolutions } = await useAsyncData("design", () =>
  queryContent("/problems-solution/design").find()
);
</script>

<!-- Blog: LeetCode Coding Problems -->
<template>
  <article>
    <!--Leet Code-->
    <div>
      <h1 class="flex items-center gap-2 mb-4 text-3xl font-bold text-left">
        LeetCode Solutions
        <span
          class="inline-flex items-center justify-center w-8 h-8 text-base font-medium rounded-full dark:bg-zinc-800 dark:text-zinc-300 bg-zinc-200 text-zinc-600"
          aria-label="Total Number of Solutions" title="Total Number of Solutions">{{ codeSolutions.length }}</span>
      </h1>
      <p class="mb-6 text-zinc-700 dark:text-zinc-300">
        My solutions to some LeetCode-style coding problems.
      </p>
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-2">
        <template v-if="pending">
          <app-code-solution-skeleton v-for="skeleton in generateKeys(5)" :key="skeleton" />
        </template>
        <template v-else>
          <app-code-solution-card v-for="solution in codeSolutions" :key="solution._path"
            :problem-title="solution.title" :url="solution._path" :tags="solution.tags"
            :problem-url="solution.problemUrl" />
        </template>
      </section>
    </div>
    <!--Youtube Ads-->
    <youtube-ads class="my-8" title="Welcome to Frontend Talks!"
      description="Learn Frontend Development with Fun Projects and Insightful Tutorials!" button="Subscribe Now" />
    <!--UI Solutions-->
    <div>
      <h1 class="flex items-center gap-2 mb-4 text-3xl font-bold text-left">
        UI Solutions
        <span
          class="inline-flex items-center justify-center w-8 h-8 text-base font-medium rounded-full dark:bg-zinc-800 dark:text-zinc-300 bg-zinc-200 text-zinc-600"
          aria-label="Total Number of Solutions" title="Total Number of Solutions">{{ uiSolutions.length }}</span>
      </h1>
      <p class="mb-6 text-zinc-700 dark:text-zinc-300">
        UI Solutions using SCSS, CSS, and TailwindCSS and Many More to Solve Design Challenges Efficiently.
      </p>
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-2">
        <template v-if="index">
          <app-code-solution-skeleton v-for="skeleton in generateKeys(5)" :key="skeleton" />
        </template>
        <template v-else>
          <app-code-solution-card v-for="solution in uiSolutions" :key="solution._path"
            :problem-title="solution.title" :url="solution._path" :tags="solution.tags"
            :problem-url="solution.problemUrl" />
        </template>
      </section>
    </div>
  </article>
</template>
