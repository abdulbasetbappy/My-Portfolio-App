<!-- Footer: Tech Stack -->
<template>
  <footer class="flex items-center justify-start h-2">
    <p
      class="flex items-center text-base font-medium text-zinc-400 dark:text-zinc-500"
    >
      Built from scratch with:
      <nuxt-link
        class="icon-link focus-visible:global-focus text-[#00DC82]"
        to="https://nuxt.com/"
        aria-label="NuxtJS Website"
        target="_blank"
        title="NuxtJS"
        external
      >
        <Icon name="simple-icons:nuxtdotjs" />
      </nuxt-link>
      <span>&bull;</span>
      <nuxt-link
        class="icon-link focus-visible:global-focus text-[#38bdf8]"
        to="https://tailwindcss.com/"
        aria-label="Tailwind CSS Website"
        target="_blank"
        title="Tailwind CSS"
        external
      >
        <Icon name="simple-icons:tailwindcss" />
      </nuxt-link>
      By @abdulbasetbappy

    </p>
  </footer>
</template>

<style scoped>
  footer {
    @apply mt-2 mb-0 !important;
  }

  a:last-of-type {
    @apply mr-0 !important;
  }
</style>
