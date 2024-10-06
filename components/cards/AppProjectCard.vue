<script setup>
import { computed } from 'vue';

// Define the props
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
  }
});

// Check if the URL is an external link
const isExternalUrl = computed(() => {
  return props.url.startsWith("https://");
});
</script>

<!-- Project: Card -->
<template>
  <nuxt-link
    :to="url"
    :target="isExternalUrl ? '_blank' : '_self'"
    :rel="isExternalUrl ? 'noopener noreferrer' : ''"
    class="relative block w-full px-[2px] pb-[2px] h-44 overflow-hidden cursor-pointer transition duration-200 rounded-lg shadow-lg bg-gray-500 border-gray-500 dark:bg-gray-700 border dark:border-gray-700 hover:border-gray-500 hover:dark:border-gray-600 group"
  >
    <!-- Code Editor Header with Dots (Change colors on hover) -->
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

    <!-- Project Image with Hover Zoom -->
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
      <!-- Glass effect div with title and icon, reduced width, reacts to hover on the card -->
      <div
        class="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-1 bg-gray-500 bg-opacity-10 backdrop-blur-lg border border-gray-700 rounded-lg rounded-b-none w-3/4 flex items-center justify-between transition-all duration-300 ease-in-out group-hover:bg-opacity-15 border-b-0 group-hover:border-gray-700"
      >
        <h3 class="text-gray-100 text-sm text-center flex-1">
          {{ title }}
        </h3>
        <Icon
          v-show="isExternalUrl"
          name="material-symbols:arrow-outward-rounded"
          class="w-5 h-5 mr-2 text-green-600"
        />
      </div>
    </div>
  </nuxt-link>

</template>
