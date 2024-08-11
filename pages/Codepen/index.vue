<script setup>
  definePageMeta({
    title: "My Code",
    description: "Projects that I am currently working on and have worked on."
  });

</script>

<!-- Projects Page -->
<template>
  <article>
    <h1 class="mb-4 text-3xl font-bold text-left">Codepen</h1>
    <p class="mb-6 text-zinc-700 dark:text-zinc-300">
      All of My Small Project is Waiting to be told.
    </p>
    <!-- Featured Projects -->
    <section
      class="flex items-center justify-center flex-col gap-6"
    >
        <h1 class="text-center sm:3xl lg:text-5xl">Coming Soon ...</h1>
            <!-- Link to More Projects -->
    <nuxt-link
      to="/"
      class="flex items-center justify-center w-24 py-2 font-semibold no-underline duration-150 bg-green-500 rounded-md focus-visible:global-focus text-zinc-800 group/hover-effect"
      > Home
      <Icon
        name="heroicons:chevron-right-20-solid"
        class="ml-1 group-hover/hover-effect:translate-x-1"
      />
    </nuxt-link>
    </section>
  </article>
</template>
