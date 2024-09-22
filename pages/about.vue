<script setup>
definePageMeta({
  title: "About | SEO-Optimized Web Apps with Vue.js and React.js",
  description: "Abdul Baset Bappy is a Frontend Developer with 3+ years of Experience, Dedicated to Building SEO-Optimized Web Apps. Proficient in Vue.js, React.js, and more."
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
      <div class="mr-10">
        <!--My Images-->
        <img class="rounded-lg mb-5 min-w-[100px] w-full h-auto md:w-auto md:h-auto shape-outside"
          src="/public/MyImage.jpg"
          alt="Best Skilled Frontend Developer In Bangladesh with ReactJs & VueJs Expertise" />
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
          <!--Youtube-->
          <nuxt-link rel="noopener" target="_blank" to="https://youtube.com/@frontendtalks"
            class="dark:bg-gray-800 bg-gray-200 rounded-lg p-2 flex items-center text-dark dark:text-white">
            <Icon name="simple-icons:youtube" class="w-7 h-7" />
          </nuxt-link>
          <!--Youtube-->
          <nuxt-link rel="noopener" target="_blank" to="https://codepen.io/Abdul-Baset-Bappy"
            class="dark:bg-gray-800 bg-gray-200 rounded-lg p-2 flex items-center text-dark dark:text-white">
            <Icon name="mingcute:codepen-line" class="w-7 h-7" />
          </nuxt-link>
        </div>

      </div>
      <div class="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
        <h1 class="text-zinc-800 dark:text-zinc-100 font-bold text-3xl mt-6 md:mt-0 mb-8 ">
          Hey it's me, Abdul Baset Bappy
        </h1>
        <p class="text-white w-full sm:w-[35rem] md:w-[30rem] lg:w-[25rem] mb-10">
          I'm Abdul Baset Bappy, and I love Front-End Web Development. My journey started with HTML, CSS, and
          JavaScript, and I quickly became excited about building interactive, dynamic websites. As I grew my skills, I
          began using Node.js and React.js to create bigger and better applications. I'm always learning and keeping up
          with the latest trends in web development.
        </p>

        <p class="my-2 text-zinc-700 dark:text-zinc-300">
          Feel free to reach out if you have any questions, ideas for working together, or just want to talk about web
          development!
        </p>
      </div>
    </div>
    <!-------------------------- About Details End ----------------------->


    <!------------------------------ Certifications --------------------->
    <p>
      My interest in software development started back in 2022 when I came
      across the developer community on LinkedIn. I became deeply fascinated by
      it and started to learn more from sources like <span class="highlight">Codecademy</span> and <span
        class="highlight">W3Schools</span>.
    </p>
    <div class="flex items-center justify-between gap-8 flex-col md:flex-row">
      <figure class="my-4 w-[66%]">
        <picture>
          <source media="(max-width: 1023px)" srcset="/certificate.png" />
          <source media="(min-width: 1024px)" srcset="/certificate.png" />
          <nuxt-img loading="lazy" preload placeholder format="png" height="100" src="/certificate.png"
            alt="A Clear Picture of Vue.Js Developer Certificate from Ostad.com"
            class="object-cover w-full mb-1 text-center border rounded-lg border-zinc-200 dark:border-transparent" />
        </picture>
        <figcaption class="text-sm text-center text-zinc-500">
          One of First Achievements in Web Development
        </figcaption>
      </figure>
      <figure class="my-4 w-[34%]">
        <picture>
          <source media="(max-width: 1023px)" srcset="/Assesment.png" />
          <source media="(min-width: 1024px)" srcset="/Assesment.png" />
          <nuxt-img loading="lazy" preload placeholder format="png" height="100" src="/Assesment.png"
            alt="A Clear Picture of Vue.Js Developer Certificate from Ostad.com"
            class="object-cover w-full mb-1 text-center border rounded-lg border-zinc-200 dark:border-transparent" />
        </picture>
        <figcaption class="text-sm text-center text-zinc-500">
          Assesment
        </figcaption>
      </figure>
    </div>
    <p>
      This ultimately influenced my decision to pursue a Course in <span class="highlight">Ostad.com</span>.
    </p>
    <p>
      While building a strong technical foundation in Course, I dedicated a lot
      of my free time teaching myself web development and building things out.
    </p>
    <!----------------------------- Certifications End ------------------->


    <app-divider class="md:my-6" />


    <!------------------------- To show frontend data -------------------->
    <ProgressCard :frontend="true" :title="'My Frontend Tools'" />
    <!------------------------ To show frontend data End ----------------->


    <!------------------------- To show backend data --------------------->
    <ProgressCard :frontend="false" :title="'My Backend Era'" />
    <p>
      With 3+ years of experience in front-end development, I’m always eager to learn new technologies and stay
      up-to-date with industry trends. I have hands-on experience with Vue.js, React.js, and their frameworks, including
      Nuxt.js and Next.js. My focus is on creating responsive, efficient web applications that deliver great user
      experiences. Let’s connect to discuss how my skills can contribute to your team’s success.
    </p>
    <!------------------------- To show backend data End ---------------->


    <app-divider class="md:my-6" />


    <!---------------------------- Job Experienced ---------------------->
    <time-line-card :title="'Job Experience'" :titleSmall="false" />
    <!--------------------------- Job Experienced End ------------------->


    <app-divider class="md:my-6" />

    <!----------------------- Others & Final Details ----------------------->
    <h2 class="text-2xl font-bold">Lastly</h2>
    <p>
      Over the past year, I have been diligently working on several projects, including <span
        class="highlight">e-commerce</span> platforms and <span class="highlight">point-of-sale (POS)</span> software.
      Additionally, I have experience working with <span class="highlight"> Restfull APIs</span>, which has significantly enhanced my skills and knowledge in Frontend
      development.
    </p>

    <!-- Youtube Ads -->
    <youtube-ads title="Welcome to Frontend Talks!."
      description="Mastering Frontend Development with Fun and Insightful Tutorials!"
       button="See on Youtube" />
    <!-- Youtube Ads End-->

    <p>
      Working on these projects has deepened my understanding of creating <span class="highlight">scalable</span> and
      <span class="highlight">maintainable</span> applications, covering the entire development lifecycle from design
      to deployment. Additionally, I've gained valuable <span class="highlight">communication skills</span> and <span
        class="highlight">teamwork</span> experience, both in-person and remotely.
    </p>
    <app-divider class="md:my-6" />
    <!----------------------- Others & Final Details End ----------------------->
    <AppFooter />
  </article>
</template>

<style scoped>
p {
  @apply text-zinc-700 dark:text-zinc-300 my-4 text-base leading-relaxed;
}
</style>
