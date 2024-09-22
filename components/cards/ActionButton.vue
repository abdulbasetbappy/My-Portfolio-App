<template>
    <a v-if="type === 'download'" class="relative w-28 flex flex-col items-center justify-center sm:px-2 lg:px-3 sm:pt-2 lg:pt-2 pb-1 pt-1 sm:pb-2 overflow-hidden font-medium rounded-md focus-visible:global-focus card-style hover:ring-2 hover:ring-offset-0 hover:ring-green-400 hover:ring-opacity-75"
        href="/Bappy's Resume.pdf" download="Bappy's Resume">
        <span class="mr-[1.25rem]">Resume</span>
        <Icon name="line-md:download-loop" size="1.25rem" aria-label="Opens Download Modal For File"
            class="absolute flex-shrink-0 text-green-500 sm:top-2 top-1 right-2" />
    </a>
    <a v-if="type === 'call'" class="relative w-28 flex flex-col items-center justify-center sm:px-2 lg:px-3 sm:pt-2 lg:pt-2 pb-1 pt-1 sm:pb-2 overflow-hidden font-medium rounded-md focus-visible:global-focus card-style hover:ring-2 hover:ring-offset-0 hover:ring-green-400 hover:ring-opacity-75"
        href="tel:+8801799568976">
        <span class="mr-[1.25rem]">Call Now</span>
        <Icon name="line-md:phone-call-twotone-loop" 
        size="1.25rem" 
        aria-label="Opens Download Modal For File"
        class="absolute flex-shrink-0 text-green-500 sm:top-2 top-1 right-2" />
    </a>
</template>

<script setup>
defineProps({
    type:String,
})
</script>

<style scoped></style>