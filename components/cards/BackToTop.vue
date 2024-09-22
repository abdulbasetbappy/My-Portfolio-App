<template>
    <button v-show="showButton"
        class="fixed bottom-6 right-8 p-0 bg-transparent w-10 h-10 transition-opacity duration-300 ease-in-out"
        @click="scrollToTop">
        <svg width="40px" height="100%" viewBox="0 0 247 390" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
            <path id="wheel" d="M123.359,79.775l0,72.843" style="fill:none;stroke:#22c55e;stroke-width:20px;" />
            <path id="mouse"
                d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                style="fill:none;stroke:#15803d;stroke-width:20px;" />
        </svg>
    </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)
const amountScrolled = 200

const handleScroll = () => {
    showButton.value = window.scrollY > amountScrolled
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
/* Additional styles if needed */
@keyframes scroll {
	0% {
		transform: translateY(0);
	}
	30% {
		transform: translateY(100px);
	}
}

svg #wheel {
	animation: scroll ease 1.5s infinite;
}
</style>