<template>
   <div class="bg-gray-100 dark:bg-gray-900 rounded-md text-white py-6 p-2 md:p-0 md:py-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col gap-8 lg:flex-row items-center">
          <div class="lg:w-1/2">
            <h1 class="text-4xl text-zinc-800 dark:text-zinc-100 font-bold leading-tight mb-2 md:mb-4">
              {{ title }}
            </h1>
            <p class="text-base font-medium mb-4 md:mb-8 text-zinc-800 dark:text-zinc-100">
              {{ description }}
            </p>
            <nuxt-link to="https://www.youtube.com/@FrontendTalks" target="_blank"
              class="flex items-center justify-center w-44 py-2 font-semibold no-underline duration-150 bg-green-500 rounded-md focus-visible:global-focus text-zinc-800 group/hover-effect">
              {{button}}
              <Icon name="heroicons:chevron-right-20-solid" class="ml-1 group-hover/hover-effect:translate-x-1" />
            </nuxt-link>
          </div>
          <div class="lg:w-1/2 lg:ml-12">
            <iframe
              class="rounded-lg min-w-[300px] md:min-w-[395px] min-h-[225px] shadow-lg hover:shadow-xl transition duration-200"
              src="https://www.youtube.com/embed/3hPoEmlBQdY"
              title="Galaxy S24 Ultra: Official Introduction Film | Samsung" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Default title'
  },
  description: {
    type: String,
    default: 'Default description'
  },
  button: {
    type: String,
    default: 'IconMarkdown'
  }
})
</script>

<style scoped>

</style>