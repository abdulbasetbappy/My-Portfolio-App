<script setup>
definePageMeta({
  title: "Problems Solved By Abdul Baset Bappy",
  description: "JavaScript Coding Problems solved by Abdul Baset Bappy, a Skilled Full-Stack Developer with 1+ years of Experience.",
});

// Fetch all other projects
const { pending, data: codeSolutions } = await useLazyAsyncData(
  "leetcode",
  () => queryContent("/leetcode/leetcode").findOne(),
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

<!-- Blog: LeetCode Coding Problems -->
<template>
  <article>
    <!--Leet Code-->
    <div>
      <h1 class="flex items-center gap-2 mb-4 text-3xl font-bold text-left">
        LeetCode Solutions
        <span
          class="inline-flex items-center justify-center w-8 h-8 text-base font-medium rounded-full dark:bg-zinc-800 dark:text-zinc-300 bg-zinc-200 text-zinc-600"
          aria-label="Total Number of Solutions" title="Total Number of Solutions">{{ codeSolutions.visual.length }}</span>
      </h1>
      <p class="mb-6 text-zinc-700 dark:text-zinc-300">
        My solutions to some LeetCode-style coding problems.
      </p>
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-2">
        <template v-if="pending">
          <app-code-solution-skeleton v-for="skeleton in generateKeys(5)" :key="skeleton" />
        </template>
        <template v-else>
          <app-code-solution-card v-for="solution in codeSolutions.visual" :key="solution.title"
            :problem-title="solution.title" :url="solution.solutionUrl" :tags="solution.tags"
           />
        </template>
      </section>
    </div>
  </article>
</template>
