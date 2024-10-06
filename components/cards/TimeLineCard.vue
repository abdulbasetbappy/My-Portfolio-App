<script setup>
defineProps({
  title: {
    type: String,
    default: "Title",
  },
  titleSmall: {
    type: Boolean,
    default: false,
  },
});
const ExData = [
  {
    date: "June - 2023",
    company: "CoderOrbit",
    details:
      "Completed a 6-month Internship where I built E-commerce Frontends, Admin Dashboards, and Blog Applications, Significantly Improving My Development Skills.",
  },
  {
    date: "January - 2024",
    company: "WeTechPro",
    details:
      "In My First Remote Role, I Develop Web Apps Integrated with RESTful APIs, focusing on Reusable Components and 100% Responsive Designs.",
  },
];
</script>



<template>
  <div>
    <h2 :class="titleSmall ? 'text-xl mt-8' : 'text-2xl'" class="mb-4 font-bold">
      {{ title }}
    </h2>
    <ul role="list" class="m-8 mt-6 max-w-screen-md">
      <li v-for="data in ExData" :key="data.name" class="group relative flex flex-col pb-8 pl-7 last:pb-0">
        <div>
          <p class="font-display text-2xs/6 order-first font-bold tracking-[0.2em] text-green-600">
            <time>{{ data.date }}</time>
          </p>
          <div class="absolute bottom-0 left-[calc(0.38rem-0.75px)] top-0 w-px bg-green-500 group-first:top-3"></div>
          <div class="absolute left-0 top-0">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>
        </div>
        <div>
          <h3 class="text-sm/6 font-semibold text-zjnc-400 dark:text-white">
            {{ data.company }}
          </h3>
          <p class="text-sm/6 text-zinc-400">{{ data.details }}</p>
        </div>
      </li>
    </ul>
    <p class="text-zinc-700 dark:text-zinc-300 my-4 text-base leading-relaxed">
      With 1+ years of <span class="subtle-highlight">Remote Front-end Experience</span>, I’ve Refined my Skills under Senior mentorship, creating Clean, Efficient, and Performance-Optimized Code. I’m Passionate about building Scalable, Maintainable solutions that align with Industry Best Practices and Deliver Exceptional User Experiences.
    </p>
  </div>
</template>

<style scoped></style>
