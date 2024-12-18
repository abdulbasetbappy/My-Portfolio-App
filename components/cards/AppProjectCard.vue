<script setup>
// Props for the card
const props = defineProps({
  url: {
    type: String,
    default: "#",
  },
  image: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "Title",
  },
  description: {
    type: String,
    default: "This is a project description.",
  },
  madeWith: {
    type: Array,
    default: () => ["Love"],
  },
});

// Check if the URL is external
const isExternalUrl = computed(() => props.url.startsWith("https://"));
</script>

<template>

    <!-- Card -->
    <nuxt-link
      :to="url"
      :target="isExternalUrl ? '_blank' : '_self'"
      :rel="isExternalUrl ? 'noopener noreferrer' : ''"
      class="relative block w-full px-[2px] pb-[2px] h-44 overflow-hidden cursor-pointer transition duration-200 rounded-lg shadow-lg bg-gray-500 border-gray-500 dark:bg-gray-800 border dark:border-gray-700 hover:border-gray-500 hover:dark:border-gray-600 group"
    >
      <!-- Card content -->
      <div class="flex items-center justify-between p-1">
        <div class="flex space-x-[4px]">
          <div
            class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-500 transition-colors duration-300 group-hover:bg-red-500"
          ></div>
          <div
            class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-500 transition-colors duration-300 group-hover:bg-yellow-500"
          ></div>
          <div
            class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-500 transition-colors duration-300 group-hover:bg-green-500"
          ></div>
        </div>
      </div>

      <div class="overflow-hidden pb-[2px] rounded-lg h-40">
        <nuxt-img
          preload
          placeholder
          width="100%"
          height="100%"
          :src="image"
          :alt="`Project Logo`"
          class="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        <div
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-1 bg-gray-500 bg-opacity-40 backdrop-blur-lg border border-gray-500 rounded-lg rounded-b-none w-3/4 flex items-center justify-between transition-all duration-300 ease-in-out group-hover:bg-opacity-30 border-b-0 group-hover:border-gray-500"
        >
          <h3 class="text-gray-100 text-sm group-hover:text-base text-center flex-1">
            {{ title }}
          </h3>
          <Icon
            v-show="isExternalUrl"
            name="material-symbols:arrow-outward-rounded"
            class="w-5 h-5 group-hover:w-6 group-hover:h-6 mr-2 text-white"
          />
        </div>
      </div>
    </nuxt-link>

</template>

<style>
/* Smooth tooltip movement */
div[style*="position: fixed"] {
  transition: top 0.1s ease, left 0.1s ease;
}
</style>
