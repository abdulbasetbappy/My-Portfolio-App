<script setup>
definePageMeta({
  title: "About Abdul Baset Bappy| Full-Stack Developer",
  description: "Learn more about Abdul Baset Bappy, a skilled Full-Stack developer. Explore my journey, skills, and projects that showcase my passion."
});

const skillset = ref({
  essentials: [
    "TypeScript",
    "TailwindCSS",
    "Sass",
    "Vue.js",
    "Nuxt.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",

  ],
  tinker: ["Optimization", "RESTful APIs", "Reuseability", "SEO & Meta"],
});
</script>

<!-- About Page -->
<template>
  <article>
    <!-------------------------- Title And button ------------------------->
    <div class="flex flex-row items-start justify-between">
      <h1 class="mb-4 text-3xl font-bold">About Me</h1>

      <!--Download Resume-->
      <action-button type="download" />
    </div>
    <!------------------------ Title And button End ----------------------->

    <app-divider class="md:my-6" />


    <!--------------------------- About Details -------------------------->
    <div id="container" class="p-0 w-auto flex flex-col md:flex-row px-0 sm:px-8 md:px-24 lg:px-24 xl:px-8 relative">
      <!--My Images-->
      <div class="md:mr-10">
        <!--My Images-->
        <img class="rounded-lg mb-5 min-w-[100px] w-full h-auto md:w-auto md:h-auto shape-outside"
          src="/public/MyImage.jpg"
          alt="Abdul Baset Bappy's Picture" />
        <!--Icons-->
        <div id="social" class="flex flex-wrap justify-center items-center gap-4">
          <!--GitHub-->
          <nuxt-link rel="noopener" target="_blank" to="https://github.com/abdulbasetbappy"
            class="dark:bg-gray-800 bg-gray-200 rounded-lg p-2 flex items-center text-dark dark:text-white">
            <Icon name="ion:logo-github" class="w-7 h-7" />
          </nuxt-link>
          <!--LinkedIn-->
          <nuxt-link rel="noopener" target="_blank" to="https://www.linkedin.com/in/abdulbasetbappy"
            class="dark:bg-gray-800 bg-gray-200 rounded-lg p-2  flex items-center text-dark dark:text-white">
            <Icon name="akar-icons:linkedin-v1-fill" class="w-7 h-7" />
          </nuxt-link>
          <!--Codepen-->
          <nuxt-link rel="noopener" target="_blank" to="https://codepen.io/Abdul-Baset-Bappy"
            class="dark:bg-gray-800 bg-gray-200 rounded-lg p-2 flex items-center text-dark dark:text-white">
            <Icon name="mingcute:codepen-line" class="w-7 h-7" />
          </nuxt-link>
        </div>
      </div>
      <!--My Details-->
      <div class="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
        <h1 class="text-zinc-800 dark:text-zinc-100 font-bold text-3xl mt-6 md:mt-0 mb-8 ">
          Hey it's me, Abdul Baset Bappy
        </h1>
        <p class="text-white w-full sm:w-[35rem] md:w-[30rem] lg:w-[25rem] mb-10">
          I love Software Development. My journey started with HTML, CSS, and
          <span class="subtle-highlight">JavaScript</span>, and I quickly became excited about building <span
            class="subtle-highlight">interactive</span>, dynamic websites. As I grew my skills, I
          began using <span class="subtle-highlight"> Vue.js and Node.js</span> to create bigger and better
          applications. I'm always learning and keeping up
          with the latest trends in web development.
        </p>

        <p class="my-2 text-zinc-700 dark:text-zinc-300">
          Feel free to reach out if you have any questions, ideas for <span class="subtle-highlight">working
            together</span>, or just want to talk about web
          development!
        </p>
      </div>
    </div>
    <p>
      My interest in software development started back in 2022 when I came
      across the developer community on LinkedIn. I became deeply fascinated by
      it and started to learn more from sources like <span class="highlight">Codecademy</span> and <span
        class="highlight">W3Schools</span>.
    </p>
    <!-------------------------- About Details End ----------------------->
    <!-------------------------------- Skills --------------------------->
    <section>
      <h2 class="py-1 text-xl font-semibold">My Toolkit
        <span id="wave">🛠️</span>
      </h2>
      <!-- Primary Tools -->
      <p class="mb-3 text-zinc-700 dark:text-zinc-300">
        My Specialty is <span class="subtle-highlight">Solving Poblems</span>,
        and my Toolbox includes:
      </p>
      <ul class="grid w-full grid-flow-col-dense grid-rows-3 p-0 pl-2 mb-3 list-disc gap-y-2 lg:w-3/4">
        <li v-for="skillName in skillset.essentials" :key="skillName" class="text-green-500 list-inside">
          <span class="font-medium text-zinc-700 dark:text-zinc-300">{{
            skillName
          }}</span>
        </li>
      </ul>
      <!-- Secondary Tools -->
      <p class="mb-3 text-zinc-700 dark:text-zinc-300">
        I'm
        <span class="subtle-highlight">Always Learning</span> and Exploring:
      </p>
      <ul class="grid w-full grid-flow-col-dense grid-rows-2 p-0 pl-2 mb-3 list-disc gap-y-2 lg:w-3/4">
        <li v-for="skillName in skillset.tinker" :key="skillName" class="text-green-500 list-inside">
          <span class="font-medium text-zinc-700 dark:text-zinc-300">{{
            skillName
          }}</span>
        </li>
      </ul>
    </section>
    <app-divider class="md:my-6" />


    <!---------------------------- Job Experienced ---------------------->
    <time-line-card :title="'Job Experience'" :titleSmall="true" />
    <!--------------------------- Job Experienced End ------------------->


    <app-divider class="md:my-5" />

    <!----------------------- Others & Final Details ----------------------->
    <h2 class="text-2xl font-bold">Lastly</h2>
    <p>
      Over the past year, I have been diligently working on several projects, including <span
        class="subtle-highlight">E-commerce</span> platforms, <span class="subtle-highlight">point-of-sale (POS)</span>,
      and <span class="subtle-highlight">Saas</span> software.
      I also have Practical experience utilizing <span class="subtle-highlight"> Restfull APIs</span> with  <span
        class="subtle-highlight"> Fastest Response Time</span> and <span class="subtle-highlight">Optimization</span> in mind.
    </p>

    <p>
      My knowledge in developing scalable and maintainable apps throughout the whole development lifecycle, from design
      to deployment, has increased as a result of working on these projects. In addition, both on-site and <span
        class="highlight">remotely</span>, I've acquired useful <span class="highlight">Communication Skills</span> and
      <span class="highlight">Teamwork</span> experience.
    </p>

    <p>
      I'm always <span class="highlight">Looking for New Opportunities</span> to learn and grow, and I'm excited to see
      what the future holds. If you're interested in <span class="subtle-highlight">working together</span>, feel free to reach out!
    </p>
    <app-divider class="md:my-3" />
    <!----------------------- Others & Final Details End ----------------------->
    <AppFooter />
  </article>
</template>

<style scoped>
p {
  @apply text-zinc-700 dark:text-zinc-300 my-4 text-base leading-relaxed;
}
</style>
